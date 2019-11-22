import React from 'react';
import { string } from 'prop-types';

const NewsItem = ({title , text}) => {
  return (
    <div>
      <h2>{title}</h2>
      <p>{text}</p>
    </div>
  )
}

NewsItem.propTypes = {
  title: string,
  text: string
};

NewsItem.defaultProps = {
  title: '',
  text: ''
}

export default NewsItem;
