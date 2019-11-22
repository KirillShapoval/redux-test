import React, { Component } from 'react';
import { connect } from 'react-redux';
import { ACTIONS as profileAction } from '../reducers/profile';
import { withRouter } from 'react-router-dom';
import SocialsUserProfile from './SocialsUserProfile';
import { func, object, bool } from 'prop-types';
// import { Redirect } from 'react-router-dom';

const mapStateToProps = (store) => ({
  isLogged: store.auth.isLogged,
  usersProfile: store.profile.usersProfile,
  isLoading: store.profile.loading,
  // error: store.profile.error
});

const mapDispatchToProps = {
  getUsersData: profileAction.getUsersData,
  // getError: profileAction.getError,
  clearStore: profileAction.clearStore
};

class Profile extends Component {

  static propTypes = {
    isLogged: bool,
    usersProfile: object,
    isLoading: bool,
    // error: object,
    getUsersData: func,
    // getError: func,
    clearStore: func,
  }

  static defaultProps = {
    isLogged: false,
    usersProfile: null,
    isLoading: false,
    getUsersData: undefined,
    clearStore: undefined
  }

  componentDidMount() {
    if (!this.props.isLogged) {
      this.props.history.push('./login')
    }
    this.props.getUsersData();
    // this.props.getError();
    // this.loadData();
  }

  componentWillUnmount() {
    this.props.clearStore()
  }

  // loadData is a random selection method of one of few functions
  // https://stackoverflow.com/questions/42430401/how-to-call-a-random-function-one-time-in-javascript

  // loadData = () => {
  //   const funcs = [
  //     this.props.getUsersData,
  //     this.props.getError
  //   ]

  //   const i = Math.floor(Math.random() * funcs.length)
  //   funcs.splice(i-1, 1)[0]()
  // }

  renderUserInfo = () => {
    const { usersProfile } = this.props;
    if (!usersProfile) return null;
    return (
      <div style={{ fontSize: '30px' }}>
        Name:
        <span style={{ margin: '0 5px' }}>{usersProfile.fname ? usersProfile.fname : ''}</span>
        <span style={{ margin: '0 5px' }}>{usersProfile.lname ? usersProfile.lname : ''}</span>
        {/* <span>Name: {`${usersProfile.fname} ${usersProfile.lname}`}</span> */}
        <div>
          {usersProfile && usersProfile.socials && usersProfile.socials.map((c, i) => (
            <SocialsUserProfile key={i}
                                // link={c.youtube || c.instagram || c.web || c.facebook}
                                youtube={c.youtube}
                                instagram={c.instagram}
                                web={c.web}
                                facebook={c.facebook}
            />
          ))}
        </div>
      </div>
    );
  };

  // renderError = () => {
  //   const { error } = this.props;
  //   if (!error) return null;
  //   return (
  //     <div>
  //       {error.message && (<p style={{ fontSize: '30px' }}>Error: {error.message}</p>)}
  //     </div>
  //   );
  // };

  render() {
    if(!this.props.isLogged) return null;
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
        {/* {this.renderError()} */}
      </div>
    );
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withRouter(Profile));
// export default connect(mapStateToProps)(Profile);
