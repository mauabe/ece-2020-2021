import React, {Component} from 'react';
import Page from '../components/Page';
import {articlesHighlights} from '../assets/articlesHighlights.js';

class Highlights extends Component{
  constructor(props) {
		super(props);
	  this.state = {}
    // console.log('%c PROPS at Highlights constructor', 'color:black;background:magenta;padding:6px;border:1px dashed black', this.props)
  }

  render() {
    return (
      <div className="content-area">
        <Page
          pageView="highlights"
          articles={articlesHighlights}
        />
      </div>
    )
  }
}

export default Highlights;
