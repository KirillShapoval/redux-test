import React from 'react';
import { string } from 'prop-types';

const SocialsUserProfile = ({youtube, instagram, web, facebook}) => {

  if (youtube) {
    return (
      <span>
        <a href={youtube} target='blank'>
          <img src='youtube_logo.png' style={{width: '40px', height: '40px'}} alt='youtube'></img>
        </a>
      </span>
    )
  }
  else if (instagram) {
    return (
      <span>
        <a href={instagram} target='blank'>
          <img src='instagram_logo.jpg' style={{width: '40px', height: '40px'}} alt='instagram'></img>
        </a>
      </span>
    )
  }
  else if (web) {
    return (
      <span>
        <a href={web} target='blank'>
          <img src='f-one_logo.png' style={{width: '40px', height: '40px'}} alt='f-one'></img>
        </a>
      </span>
    )
  }
  else if (facebook) {
    return (
      <span>
        <a href={facebook} target='blank'>
          <img src='facebook_logo.png' style={{width: '40px', height: '40px'}} alt='facebook'></img>
        </a>
      </span>
    )
  }
}

SocialsUserProfile.propTypes = {
  youtube: string,
  instagram: string,
  web: string,
  facebook: string
};

SocialsUserProfile.defaultProps = {
  youtube: '',
  instagram: '',
  web: '',
  facebook: ''
}

export default SocialsUserProfile;
