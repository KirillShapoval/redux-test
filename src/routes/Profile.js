import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

const mapStateToProps = (store) => ({
  isLogged: store.auth.isLogged
});

class Profile extends Component {
  componentDidMount() {
    if (!this.props.isLogged) {
      this.props.history.push('./login')
    }
  }

  render() {
    if(!this.props.isLogged) return null;
    return (
      <div>
        <h1>Profile</h1>
        <p style={{color: 'red', fontSize: '30px'}}>Some confidential information</p>
      </div>
    );
  }
}

export default connect(mapStateToProps)(withRouter(Profile));
