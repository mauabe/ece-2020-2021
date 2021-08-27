import React, {Component} from 'react';
import Bubbles from '../components/Bubbles';
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
        <Bubbles
          pageView="highlights"
          articles={articlesHighlights}
        />
      </div>
    )
  }
}

export default Highlights;
