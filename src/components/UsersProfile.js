import React, { Component } from 'react';
import { connect } from 'react-redux';
import { ACTIONS as profileAction } from '../reducers/profile';
import { withRouter } from 'react-router-dom';
import SocialsUsersProfile from './SocialsUsersProfile';
// import { Redirect } from 'react-router-dom';

const mapStateToProps = (store) => ({
  isLogged: store.auth.isLogged,
  usersProfile: store.getUsersProfile.usersProfile,
  isLoading: store.getUsersProfile.loading,
  error: store.getUsersProfile.error
});

const mapDispatchToProps = {
  getUsersData: profileAction.getUsersData,
  getError: profileAction.getError,
  clearStore: profileAction.clearStore
};

class Profile extends Component {
  componentDidMount() {
    // if (!this.props.isLogged) {
    //   this.props.history.push('./login')
    // }
    // this.props.getUsersData();
    // this.props.getError();
    this.loadData();
  }

  componentWillUnmount() {
    this.props.clearStore()
  }

  // loadData is a random selection method of one of few functions
  // https://stackoverflow.com/questions/42430401/how-to-call-a-random-function-one-time-in-javascript
  loadData = () => {
    const funcs = [
      this.props.getUsersData,
      this.props.getError
    ]

    const i = Math.floor(Math.random() * funcs.length)
    funcs.splice(i-1, 1)[0]()
  }

  renderUserInfo = () => {
    const { usersProfile } = this.props;
    if (!usersProfile) return null;
    return (
      <div style={{ fontSize: '30px' }}>
        Name:
        <span style={{ margin: '0 5px' }}>{usersProfile.fname ? usersProfile.fname : ''}</span>
        <span style={{ margin: '0 5px' }}>{usersProfile.lname ? usersProfile.lname : ''}</span>
        {/* <span>Name: {`${usersProfile.fname} ${usersProfile.lname}`}</span> */}
        <SocialsUsersProfile />
      </div>
    );
  };

  renderError = () => {
    const { error } = this.props;
    if (!error) return null;
    return (
      <div>
        {error.message && (<p style={{ fontSize: '30px' }}>Error: {error.message}</p>)}
      </div>
    );
  };

  render() {
    // if(!this.props.isLogged) return null;
    // const { fname, lname, socials = [] } = this.props.usersProfile;

    // if (!this.props.isLogged) {
    //   return <Redirect to='/login' />
    // }
    if (this.props.isLoading) {
      return <img src="preloader.gif" alt="preloader"></img>;
    }
    return (
      <div>
        {this.renderUserInfo()}
        {this.renderError()}
      </div>
    );
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withRouter(Profile));
// export default connect(mapStateToProps)(Profile);
