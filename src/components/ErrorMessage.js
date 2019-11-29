import React, { Component } from 'react';
import { connect } from 'react-redux';

const mapStateToProps = (store) => ({
  error: store.auth.error,
});

class ErrorMessage extends Component {
  render() {
    const message = this.props.error ? this.props.error.response.data.message : '';
    return (
      <div>{message}</div>
    )
  }
}

export default connect(mapStateToProps)(ErrorMessage);
