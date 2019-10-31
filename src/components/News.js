import React, { Component } from 'react';
import { connect } from 'react-redux';

const mapStateToProps = (store) => ({
  news: store.getNews.newsArticles
});

class News extends Component {
  render() {
    const { news } = this.props
    return (
      <div>
        <h1>Some news</h1>
        <ul>
          {news.map((c,i) => {
            return <li key={i.toString()}>{c}</li>;
          })}
        </ul>
      </div>
    );
  }
}

export default connect(mapStateToProps)(News);
