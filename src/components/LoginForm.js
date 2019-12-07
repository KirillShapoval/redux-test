import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { ACTIONS as authAction } from '../reducers/auth';
import { func, bool } from 'prop-types';
// import ErrorMessage from './ErrorMessage';

const mapStateToProps = (store) => ({
  isLoading: store.auth.loading,
  isLogged: store.auth.isLogged,
});

const mapDispatchToProps = {
  setLogged: authAction.setLogged,
  setUserLogOut: authAction.setUserLogOut
};

class LoginForm extends Component {

  static propTypes = {
    isLoading: bool,
    isLogged: bool,
    setLogged: func,
    setUserLogOut: func
  }

  static defaultProps = {
    isLoading: false,
    isLogged: false,
    setLogged: undefined,
    setUserLogOut: undefined
  };

  state = {
    email: '',
    password: ''
  }

  renderAuthLoginForm = () => {
    return (
      <div>
        <form onSubmit={this.handleSubmitLogIn}>
        <p></p>
        <input
          className="input"
          onChange={this.handleChangeEmail}
          type='text'
          name='username'
          placeholder='username'
          autoComplete="off"
          autoFocus
        />
        <br />
        <input
          className="input"
          onChange={this.handleChangePassword}
          type='password'
          name='password'
          placeholder='password'
          autoComplete="off"
        />
        <br />
        <input
          className='submit'
          type='submit'
          value='Log In'
        />
        {/* <ErrorMessage /> */}
        </form>
      </div>
    )
  }

  handleChangeEmail = (e) => {
    this.setState({
      email: e.target.value
    })
  }

  handleChangePassword = (e) => {
    this.setState({
      password: e.target.value
    })
  }

  handleSubmitLogIn = e => {
    e.preventDefault();
    const logging = this.props.setLogged(this.state);
    const onSuccess = () => {
      localStorage.setItem('emailLocalStorage', this.state.email);
      localStorage.setItem('passLocalStorage', this.state.password);
      this.props.history.push('/profile');
    };
    const onError = (error) => {
      console.error(error.data.message);
    };
    logging.then(onSuccess).catch(onError);
  }

  handleSubmitLogOut = (e) => {
    e.preventDefault();
    this.props.setUserLogOut();
  }

  render() {
    if (this.props.isLoading) {
      return <img src='preloader.gif' alt='preloader'></img>
    }
    return !this.props.isLogged ?
    (
      <div>{this.renderAuthLoginForm()}</div>
    ) : (
      <div>
        <h2>You already logged!</h2>
        <form onSubmit={this.handleSubmitLogOut}>
          <input
            type='submit'
            value='Log Out'
          />
        </form>
      </div>
    )
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(LoginForm));
