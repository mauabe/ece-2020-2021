import React, {Component} from 'react';
import Bubbles from '../components/Bubbles';
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
        <Bubbles
          pageView="students"
          articles={articlesStudents}
        />
      </div>
    )
  }
}

export default Students;
