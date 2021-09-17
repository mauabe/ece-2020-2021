import React, {Component} from 'react';
// import {NavLink, Router, Route, Switch, Redirect, Link } from "react-router-dom";

import Bubble from './Bubble'
import Article from './Article';

//TODO: PROPTYPES
//PROPS:
//pageView: location of first menu layer
//articles: all articles for this page, feeds the second layer menu included in Page component


//RENAMED Bubbles to Page
class Page extends Component{
  constructor(props) {
		super(props);
	  this.state = {
      articleSelection: this.props.articles[0].articleId
     }
     //defaults to first articleId at constructor
     //articleId uses the same string value as articleSelection(which is also pathname).

     //TODO: Add pathname to article
		// console.log('%c PROPS at Page constructor', 'color:black;background:pink;padding:6px;border:1px dashed red', this.props)
  }

  // sends articleId of bubble menu selected
  handleClick = (articleId) => {
    this.setState(state => ({articleSelection: articleId}));
  }

  //iterate over submenus and populate PAGE
  renderPageSubmenu = () => {
    const {articles, pageView} = this.props;

    const pageSubmenuHtml = [];
    articles.map(obj =>
      pageSubmenuHtml.push(
        <Bubble
          key={obj.articleId}
          pageView={pageView}
          articleId={obj.articleId}
          articleSelection={this.state.articleSelection}
          bubbleTextOne={obj.bubbleTextOne}
          bubbleTextTwo={obj.bubbleTextTwo}
          bubbleTextThree={obj.bubbleTextThree}
          articleHeadlineOne={obj.articleHeadlineOne}
          articleHeadlineTwo={obj.articleHeadlineTwo}
          articleHeadlineThree={obj.articleHeadlineThree}
          articleImageProf={obj.articleImageProf}
          articleAuthor={obj.articleAuthor}
          articleImageAltTextProf={obj.articleImageAltTextProf}
          onClick={this.handleClick}
        />
      )
    );
    return pageSubmenuHtml;
  }

  renderArticle = () => {
    const {articles} = this.props;
    const {articleSelection} = this.state;

    // find story that matches articleSelection and pass it to Article
    const story = articles.find(obj => obj.articleId === articleSelection)
    // console.log('%c PROPS at PAGE render article', 'color:black;background:red;padding:16px;border:1px dashed black', story)

    return(
      <Article
        story={story}
        articleSelection={this.state.articleSelection}
      />
    )
  }


  // renamed bubbles class name to page-submenu
  render() {

    return (
      <div className="page">
        <div className="page-submenu">
          {this.renderPageSubmenu()}
        </div>
          {this.renderArticle()}
      </div>
    );
  }
}

export default Page;
