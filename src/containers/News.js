import React, {Component} from 'react';
import Page from '../components/Page';
import {articlesNews} from '../assets/articlesNews.js';

class News extends Component{
  constructor(props) {
    super(props);
    this.state = {}
  }
  render() {
    return (
      <div className="content-area">
        <Page
          pageView="news"
          articles={articlesNews}
        />
      </div>
    )
  }
}

export default News;
