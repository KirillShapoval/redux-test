import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
  ACTIONS as profileAction,
  SELECTORS as profileSelectors
} from '../reducers/profile';
import { ACTIONS as authAction } from '../reducers/auth';
import { withRouter } from 'react-router-dom';
import SocialsUserProfile from './SocialsUserProfile';
import { func, object, bool, array } from 'prop-types';

const mapStateToProps = (store) => ({
  isLogged: store.auth.isLogged,
  usersProfile: store.profile.usersProfile,
  isLoading: store.profile.loading,
  social: profileSelectors.selectSocial(store)
});

const mapDispatchToProps = {
  getUsersData: profileAction.getUsersData,
  clearStore: profileAction.clearStore,
  setUserLogOut: authAction.setUserLogOut
};

class Profile extends Component {
  static propTypes = {
    isLogged: bool,
    usersProfile: object,
    isLoading: bool,
    social: array,
    getUsersData: func,
    clearStore: func,
    setUserLogOut: func
  };

  static defaultProps = {
    isLogged: false,
    usersProfile: null,
    isLoading: false,
    social: null,
    getUsersData: undefined,
    clearStore: undefined,
    setUserLogOut: undefined
  };

  componentDidMount() {
    // if (!this.props.isLogged) {
    //   this.props.history.push('./login');
    // }
    this.props.getUsersData();
  }

  handleSubmitLogOut = e => {
    e.preventDefault();
    this.props.setUserLogOut();
    // this.props.history.push('./login');
  }

  renderUserInfo = () => {
    const { usersProfile, social } = this.props;
    if (!usersProfile) return null;
    return (
      <div style={{ fontSize: '30px' }}>
        Name:
        <span style={{ margin: '0 5px' }}>
          {usersProfile.fname ? usersProfile.fname : ''}
        </span>
        <span style={{ margin: '0 5px' }}>
          {usersProfile.lname ? usersProfile.lname : ''}
        </span>
        {/* <span>Name: {`${usersProfile.fname} ${usersProfile.lname}`}</span> */}
        <div>
          {social && <SocialsUserProfile data={social} />}
        </div>
        <form onSubmit={this.handleSubmitLogOut}>
          <input
            type='submit'
            value='Log Out'
          />
        </form>
      </div>
    );
  };

  render() {
    if (this.props.isLoading) {
      return <img src="preloader.gif" alt="preloader"></img>;
    }
    return (
      <div>
        {this.renderUserInfo()}
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(Profile));
