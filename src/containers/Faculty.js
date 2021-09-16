import React, {Component} from 'react';
import Page from '../components/Page';
import {articlesFaculty} from '../assets/articlesFaculty.js';

class Faculty extends Component{
  // constructor(props) {
	// 	super(props);
  //   // this.state = {}
  // }

  render() {
    return (
      <div className="content-area">
        <Page
          pageView="faculty"
          articles={articlesFaculty}
        />
      </div>
    )
  }
}

export default Faculty;
