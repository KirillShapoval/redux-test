import React, { Component } from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { ACTIONS as authAction } from "../reducers/auth";

const mapDispatchToProps = {
  setLogged: authAction.setLogged
};

class Login extends Component {

  handleSubmit = e => {
    e.preventDefault();
    if(this.username.value && this.username.value ==='**admin**' &&
      this.pass.value && this.pass.value === '12345')
      {
        this.props.setLogged();
        this.props.history.push('./profile');
      }
  }

  render() {
    return (
      <div>
        <h1>Login Page</h1>
        <form onSubmit={this.handleSubmit}>
          <p></p>
          <input
            ref={c => this.username = c}
            className="input"
            type='text'
            name='username'
            placeholder='username'
            autoComplete="off"
            autoFocus
          />
          <br />
          <input
            ref={c => this.pass = c}
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

export default connect(null, mapDispatchToProps)(withRouter(Login));
