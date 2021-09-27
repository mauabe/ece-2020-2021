import React, {Component} from 'react';
import {NavLink} from "react-router-dom";
import ReactHtmlParser from 'react-html-parser';

class Bubble extends Component{

  constructor() {
		super();
    this.handleBubbleClick = this.handleBubbleClick.bind(this);
  }

  handleBubbleClick = (e) => {
    const {articleId} = this.props;
    e.preventDefault();
    this.props.onClick(articleId, e);
  }

  render() {
    const {pageView, articleId, articleSelection,  articleImageProf, articleImageAltTextProf, bubbleTextOne, bubbleTextTwo, bubbleTextThree, articleAuthor} = this.props ;
    const activeClassNameCheck = ( articleSelection === articleId) ? `${articleId} active`: `${articleId}`;

    return (
      <NavLink
        exact to={`/${pageView}/${articleId}`}
        activeClassName="active"
        className={`bubble-link ${activeClassNameCheck}`}
        onClick={this.handleBubbleClick}
        key={articleId}
      >
          <div className={`bubble-frame ${activeClassNameCheck}`}>
            <img
              src={`${articleImageProf}`}
              alt={`${articleImageAltTextProf}`}
              title={`${articleAuthor}`}
              className={`bubble-image ${activeClassNameCheck}`}
            />
          </div >
          <div className="bubble-text-link">
            <div className={`bubble-text ${activeClassNameCheck}`}>{ReactHtmlParser(bubbleTextOne)} </div>
            <div className={`bubble-text ${activeClassNameCheck}`}>{bubbleTextTwo}</div>
            <div className={`bubble-text ${activeClassNameCheck}`}>{bubbleTextThree}</div>
          </div>
       </NavLink>
    );
  }
}

export default Bubble;
