import React, {Component} from 'react';
import Bubbles from '../components/Bubbles';
import {articlesAlumni} from '../assets/articlesAlumni.js';

class Alumni extends Component{
  constructor(props) {
		super(props);
	  this.state = {}
    // console.log('%c PROPS at ALUMNI constructor', 'color:black;background:magenta;padding:6px;border:1px dashed black', this.props)
  }

    render() {
      return (
        <div className="content-area">
          <Bubbles
            pageView="alumni"
            articles={articlesAlumni}
          />
        </div>
      )
    }
}

export default Alumni;
