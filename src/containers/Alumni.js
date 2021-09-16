import React, {Component} from 'react';
import Page from '../components/Page';
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
          <Page
            pageView="alumni"
            articles={articlesAlumni}
          />
        </div>
      )
    }
}

export default Alumni;
