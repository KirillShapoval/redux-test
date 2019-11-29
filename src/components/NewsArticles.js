import React, { Component } from 'react';
import { connect } from 'react-redux';
import { ACTIONS as newsAction } from '../reducers/news';
import { bool, func, array } from 'prop-types';
import NewsItem from './NewsItem';


const mapStateToProps = (store) => ({
  news: store.news.newsArticles,
  isLoading: store.news.loading
});

const mapDispatchToProps = {
  getAllNews: newsAction.getAllNews,
  clearStore: newsAction.clearStore
};

class NewsArticles extends Component {

  static propTypes = {
    news: array,
    isLoading: bool,
    getAllNews: func,
    clearStore: func
  }

  static defaultProps = {
    news: null,
    isLoading: false,
    getAllNews: undefined,
    clearStore: undefined
  }

  componentDidMount() {
    this.props.getAllNews();
  }

  componentWillUnmount() {
    this.props.clearStore()
  }

  render() {
    const { news } = this.props;
    if (this.props.isLoading) {
      return <img src='preloader.gif' alt='preloader'></img>
    }
    if (!news) return null;
    return (
      <div>
        { news && news.map(c => (
          <NewsItem
            key={c.id}
            title={c.title}
            text={c.text}
          />
        ))}
        <hr />
        <h3>There are {news.length} news today</h3>
      </div>
    )
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(NewsArticles);
