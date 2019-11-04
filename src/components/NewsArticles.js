import React, { Component } from 'react';
import { connect } from 'react-redux';

const mapStateToProps = (store) => ({
  news: store.getNews.newsArticles
});

class NewsArticles extends Component {
  render() {
    const { news } = this.props;
    return (
      <ul>
        {news.map((c,i) => {
          return <li key={i.toString()}>{c}</li>;
        })}
      </ul>
    )
  }
}

export default connect(mapStateToProps)(NewsArticles);
