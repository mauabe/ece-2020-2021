import React, {Component} from 'react';
import Page from '../components/Page';
import {articlesStudents} from '../assets/articlesStudents.js';

class Students extends Component{
  constructor(props) {
		super(props);
	  this.state = {}
		// console.log('%c PROPS at Students constructor', 'color:black;background:magenta;padding:6px;border:1px dashed black', this.props)
  }

  render() {
    return (
      <div className="content-area">
        <Page
          pageView="students"
          articles={articlesStudents}
        />
      </div>
    )
  }
}

export default Students;
