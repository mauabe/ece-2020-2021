import React, {Component} from 'react';
// import {NavLink, Router, Route, Switch, Redirect, Link } from "react-router-dom";

import Bubble from './Bubble'
import Article from '../components/Article';

//TODO: PROPTYPES
//PROPS:
//pageView: location of first menu layer
//articles: all articles for this page, feeds the second layer menu, the bubbles

class Bubbles extends Component{
  constructor(props) {
		super(props);
	  this.state = {
      articleSelection: this.props.articles[0].articleId
     }
     //articleId uses the same string value as articleSelection(which is also pathname).
     //defaults to first articleId at constructor
		// console.log('%c PROPS at BUBBLES constructor', 'color:black;background:pink;padding:6px;border:1px dashed red', this.props)
  }

  // sends articleId of bubble menu selected
  handleClick = (articleId) => {
    this.setState(state => ({articleSelection: articleId}));
  }

  //iterate over submenus and populate bubbles
  renderBubbles = () => {
    const {articles, pageView} = this.props;

    const bubbleHtml = [];
    articles.map(obj =>
      bubbleHtml.push(
        <Bubble
          key={obj.articleId}
          pageView={pageView}
          articleId={obj.articleId}
          articleSelection={this.state.articleSelection}
          professorTitle={obj.professorTitle}
          professorName={obj.professorName}
          articleAbrevTitle={obj.articleAbrevTitle}
          articleImageProf={obj.articleImageProf}
          articleImageAltTextProf={obj.articleImageAltTextProf}
          onClick={this.handleClick}
        />
      )
    );
    return bubbleHtml;
  }

  renderArticle = () => {
    const {articles} = this.props;
    const {articleSelection} = this.state;

    // find story that matches articleSelection and pass it to Article
    const story = articles.find(obj => obj.articleId === articleSelection)
    // console.log('%c PROPS at BUBBLES render article', 'color:black;background:red;padding:16px;border:1px dashed black', story)

    return(
      <Article
        story={story}
        articleSelection={this.state.articleSelection}
      />
    )
  }

  render() {

    return (
      <div className="page">
        <div className="bubbles">
          {this.renderBubbles()}
        </div>
        {this.renderArticle()}
      </div>
    );
  }
}

export default Bubbles;
