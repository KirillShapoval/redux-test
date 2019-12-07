import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { bool } from 'prop-types';
import { Route } from 'react-router-dom';

const mapStateToProps = (store) => ({
  isLogged: store.auth.isLogged
});

class PrivateRouteProfile extends Component {

  static propTypes = {
    isLogged: bool
  }

  static defaultProps = {
    isLogged: false
  }

  render() {
    return (
      <Route
        render={({location}) =>
          this.props.isLogged ? (
            this.props.children
          ) : (
            <Redirect
              to={{
                pathname: '/login',
                state: { from: location }
              }}
            />
          )
        }
      />
    )
  }
}

export default connect(mapStateToProps)(PrivateRouteProfile);
