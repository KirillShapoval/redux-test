import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { ACTIONS as authAction } from '../reducers/auth';
import { func, bool } from 'prop-types';
// import ErrorMessage from './ErrorMessage';

const mapStateToProps = (store) => ({
  isLoading: store.auth.loading,
});

const mapDispatchToProps = {
  setLogged: authAction.setLogged,
};

class LoginForm extends Component {

  static propTypes = {
    isLoading: bool,
    setLogged: func
  }

  static defaultProps = {
    isLoading: false,
    setLogged: undefined
  };

  state = {
    email: '',
    password: ''
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

  handleSubmit = e => {
    e.preventDefault();
    const logging = this.props.setLogged(this.state);
    const onSuccess = () => {
      this.props.history.push('/profile');
    };
    const onError = (error) => {
      console.error(error.data.message);
    };
    logging.then(onSuccess).catch(onError);
  }

  render() {
    if (this.props.isLoading) {
      return <img src='preloader.gif' alt='preloader'></img>
    }
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
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
}

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(LoginForm));
