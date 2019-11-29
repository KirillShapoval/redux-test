import React from 'react';
import { array } from 'prop-types';
import './../App.css';

const SocialsUserProfile = ({ data }) => {

  const getImgPath = (name) => {
    switch(name){
      case 'youtube': {
        return 'youtube_logo.png'
      }
      case 'instagram': {
        return 'instagram_logo.jpg'
      }
      case 'web': {
        return 'f-one_logo.png'
      }
      case 'facebook': {
        return 'facebook_logo.png'
      }
      default:
        return null;
    }
  }

  return (
    <div>
      {data.map((c, i) => {
        const imgPath = getImgPath(c.name);
        return (
          <span key={i.toString()}>
            <a href={c.link} target="_blank">
              <img className="img" src={imgPath} alt={c.name}></img>
            </a>
          </span>
        );
      })}
    </div>
  );
};

SocialsUserProfile.propTypes = {
  data: array
};

SocialsUserProfile.defaultProps = {
  data: null
};

export default SocialsUserProfile;
