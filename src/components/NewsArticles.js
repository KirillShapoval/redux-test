import React, { Component } from 'react';
import { connect } from 'react-redux';
import { ACTIONS as newsAction } from '../reducers/news';
import { array, bool, func } from 'prop-types';

const mapStateToProps = (store) => ({
  news: store.getNews.newsArticles,
  isLoading: store.getNews.loading
});

const mapDispatchToProps = {
  getAllNews: newsAction.getAllNews
};

class NewsArticles extends Component {

  static propTypes = {
    news: array,
    isLoading: bool,
    getAllNews: func
  }

  componentDidMount() {
    this.props.getAllNews();
  }

  renderAllNews = () => {
    const { news } = this.props;
    if (!news) return null;
      return (
        <div>
          {news && news.map(c => {
            return (
              <div key={c.id}>
                <h2>{c.title}</h2>
                <p>{c.text}</p>
              </div>
            )
          })}
          <hr />
          <h3>There are {news.length} news today</h3>
        </div>
      )
  }

  render() {
    // if (news.length === 0) {
    //   return <p style={{fontSize: '50px', color: 'brown'}}>Loading data</p>
    // }
    if (this.props.isLoading) {
      return <img src='preloader.gif' alt='preloader'></img>
    }
    return (
      <div>
        {this.renderAllNews()}
      </div>
    )
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(NewsArticles);
