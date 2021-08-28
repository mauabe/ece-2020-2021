import React, {Component} from 'react';
import Bubbles from '../components/Bubbles';
import {articlesFaculty} from '../assets/articlesFaculty.js';

class Faculty extends Component{
  // constructor(props) {
	// 	super(props);
  //   // this.state = {}
  // }

  render() {
    return (
      <div className="content-area">
        <Bubbles
          pageView="faculty"
          articles={articlesFaculty}
        />
      </div>
    )
  }
}

export default Faculty;
