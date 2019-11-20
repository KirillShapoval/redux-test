import React, { Component } from 'react';
import { connect } from 'react-redux';
import { object } from 'prop-types';

const mapStateToProps = (store) => {
  return {
    usersProfile: store.getUsersProfile.usersProfile,
    isLoading: store.getUsersProfile.loading
  };
};

class SocialsUsersProfile extends Component {

  static propTypes = {
    usersProfile: object
  }

  renderSocialsUsersProfile = () => {
    const { usersProfile } = this.props;
    if (!usersProfile) return null;

    return (
      <div>
        {usersProfile && usersProfile.socials && usersProfile.socials.map((c, i) => {
          if (c.youtube) {
            return (
              <span key={i}>
                <a href={c.youtube} target='blank'>
                  <img src='youtube_logo.png' style={{width: '40px', height: '40px'}} alt='youtube'></img>
                </a>
              </span>
            )
          } else if (c.instagram) {
            return (
              <span key={i}>
                <a href={c.instagram} target='blank'>
                  <img src='instagram_logo.jpg' style={{width: '40px', height: '40px'}} alt='instagram'></img>
                </a>
              </span>
            );
          } else if (c.web) {
            return (
              <span key={i}>
                <a href={c.web} target='blank'>
                  <img src='f-one_logo.png' style={{width: '40px', height: '40px'}} alt='f-one'></img>
                </a>
              </span>
            );
          } else if (c.facebook) {
            return (
              <span key={i}>
                <a href={c.facebook} target='blank'>
                  <img src='facebook_logo.png' style={{width: '40px', height: '40px'}} alt='facebook'></img>
                </a>
              </span>
            );
          }
        })}
      </div>
    )
  }

  render() {
    return (
      <div>
        {this.renderSocialsUsersProfile()}
      </div>
    )
  }
}

export default connect(mapStateToProps)(SocialsUsersProfile);
