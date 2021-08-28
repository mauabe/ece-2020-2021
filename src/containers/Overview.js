import React, {Component} from 'react';
import Bubbles from '../components/Bubbles';
import {articlesOverview} from '../assets/articlesOverview.js';

class Overview extends Component{
  constructor(props) {
		super(props);
	  this.state = {
    }
		// console.log('%c PROPS at OVERVIEW constructor', 'color:black;background:red;padding:6px;border:1px dashed black', this.state)
  }

   render() {
    return (
      <div className="content-area">
        <Bubbles
          pageView="overview"
          articles={articlesOverview}
        />
      </div>
    )
  }
}

export default Overview;
