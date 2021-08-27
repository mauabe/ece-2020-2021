import React, {Component} from 'react';
// import logo from '../assets/images/UCLA_footer_600.svg';
import {NavLink} from "react-router-dom";
import ReactHtmlParser from 'react-html-parser'; //, { processNodes, convertNodeToElement, htmlparser2 }

class Bubble extends Component{

  constructor() {
		super();
    this.handleBubbleClick = this.handleBubbleClick.bind(this);
  }

  handleBubbleClick = (e) => {
    const{articleId} = this.props;
    e.preventDefault();
    this.props.onClick(articleId, e);
  }

  render() {
    const {pageView, articleId, articleSelection, articleAbrevTitle, articleImageProf, articleImageAltTextProf, professorTitle, professorName} = this.props ;
    const className = ( articleSelection === articleId) ? `${articleId} active`: `${articleId}`;

    return (
      <NavLink exact to={`/${pageView}/${articleId}`} activeClassName="active" className="bubble-link" onClick={this.handleBubbleClick} key={articleId}>
          <div className="bubble-frame">
            <img src={`${articleImageProf}`} alt={`${articleImageAltTextProf}`} title={`${articleId}`} className={`bubble-image ${className}`} />
          </div>
          <div>
            <span className={`bubble-profTitle ${className}`}>{professorTitle} </span>&nbsp;<span className={`bubble-profName ${className}`}>{ ReactHtmlParser(professorName) }</span>
          </div>
          <div className={`bubble-headline ${className}`}>{ ReactHtmlParser(articleAbrevTitle) }</div>
       </NavLink>
    );
  }
}

export default Bubble;
