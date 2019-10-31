import React, { Component } from "react";
import { connect } from 'react-redux';
import { ACTIONS as authenticationActions } from '../reducers/authentication';

const mapStateToProps = (store) => ({
  username: store.authentication.formValidation.username,
  password: store.authentication.formValidation.password,
  isAuthenticated: store.authentication.isAuthenticated
});

const mapDispatchToProps = {
  ValidationSuccess: authenticationActions.ValidationSuccess,
  isAuthenticated: authenticationActions.isAuthenticated
};

class Login extends Component {

  handleSubmit = e => {
    e.preventDefault();
  }

  render() {
    return (
      <div>
        <h1>Login Page</h1>
        <form onSubmit={this.handleSubmit}>
          <p></p>
          <input
            className="input"
            type='text'
            name='login'
            placeholder='login'
            autoComplete="off"
            autoFocus
          />
          <br />
          <input
            className="input"
            type='password'
            name='password'
            placeholder='password'
            autoComplete="off"
          />
          <br />
          <input
            className="submit"
            type='submit'
            value='Log In'
          />
        </form>
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Login);
