import React, {Component} from 'react';
import { BrowserRouter as Router, Route, Link, NavLink } from 'react-router-dom';
// import { CSSTransition } from 'react-transition-group';
// import Home from './pages/home'
// import About from './pages/about'
// import Contact from './pages/contact'
// import './styles.css'


class Routers extends Component (){

  // const routes = [
  //   { path: '/', name: 'News', Component: News },
  //   { path: '/highlights', name: 'About', Component: About },
  //   { path: '/contact', name: 'Contact', Component: Contact },
  //   { path: '/', name: 'Home', Component: Home },
  //   { path: '/about', name: 'About', Component: About },
  //   { path: '/contact', name: 'Contact', Component: Contact },
  // ]

 Example = () => {
  return (
    <Router>
    {/*
        <Navbar bg="light">
          <Nav className="mx-auto">
            {routes.map(route => (
              <Nav.Link
                key={route.path}
                as={NavLink}
                to={route.path}
                activeClassName="active"
                exact
              >
                {route.name}
              </Nav.Link>
            ))}
          </Nav>
        </Navbar> */}
        {/* <Container className="container"></Container>
        {routes.map(({ path, Component }) => (
            <Route key={path} exact path={path}>
              {({ match }) => (
                <CSSTransition
                  in={match != null}
                  timeout={300}
                  classNames="page"
                  unmountOnExit
                >
                  <div className="page">
                    <Component />
                  </div>
                </CSSTransition>
              )}
            </Route>
          ))}
        </Container> */}

    </Router>
  )
}

}
