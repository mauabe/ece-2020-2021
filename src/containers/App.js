import React, {Component} from 'react';
import { Route, Switch, Redirect } from "react-router-dom";
import '../scss/styles.scss';

import Navigation from './Navigation';
import Home from './Home';
import News from './News';
import Highlights from './Highlights';
import Students from './Students';
import Faculty from './Faculty';
import Overview from './Overview';
import Alumni from './Alumni';
import Footer from '../components/Footer';

class App extends Component {
  constructor(props) {
		super(props);
	  this.state = { }
  }

  render(){
    return (
      <div className="App">
        <Navigation/>
        <Switch>
          <Route exact path='/' component={Home}/>
          <Route path='/news' component={News}/>
          <Route path='/highlights' component={Highlights}/>
          <Route path='/students' component={Students}/>
          <Route path='/faculty' component={Faculty}/>
          <Route path='/overview' component={Overview}/>
          <Route path='/alumni' component={Alumni}/>
          <Route path='/news' render={() => <Redirect to="/news/chair" />} />,
          <Route path='/highlights' render={() => <Redirect to="/highlights/highlights0" />} />,
          <Route path='/students' render={() => <Redirect to="/students/awardsundergrad"  />}/>,
          <Route path='/faculty' render={() => <Redirect to="/faculty/ces" />}/>,
          <Route path='/overview' render={() => <Redirect to="/overview/researchcenters" />}/>,
          <Route path='/alumni' render={() => <Redirect to="/alumni/alumnae" />}/>,
        </Switch>
        <Footer/>
      </div>
    );
  }
}

export default App;
