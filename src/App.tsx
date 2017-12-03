import * as React from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Route,
  NavLink as RRNavLink
} from 'react-router-dom';
import { Nav, NavItem, NavLink, Container } from 'reactstrap';
import { Contact, Skills, Timeline, Welcome, NotFound } from './scenes';
import { Footer } from './components/core';
import { Switch } from 'react-router';

class App extends React.Component {
  render() {
    return (
      <div>
        <Router>
          <div>
            <div className="menubar">
              <Container>
                <Nav className="justify-content-center">
                  <NavItem>
                    <NavLink tag={RRNavLink} to="/" activeClassName="active" exact>Home</NavLink>
                  </NavItem>
                  <NavItem>
                    <NavLink tag={RRNavLink} to="/timeline" activeClassName="active">Timeline</NavLink>
                  </NavItem>
                  <NavItem>
                    <NavLink tag={RRNavLink} to="/skills" activeClassName="active">About</NavLink>
                  </NavItem>
                  <NavItem>
                    <NavLink tag={RRNavLink} to="/contact" activeClassName="active">Contact</NavLink>
                  </NavItem>
                </Nav>
              </Container>
            </div>
            <Container>
              <Switch>
                <Route exact path="/" component={Welcome} />
                <Route path="/timeline" component={Timeline} />
                <Route path="/skills" component={Skills} />
                <Route path="/contact" component={Contact} />
                <Route component={NotFound} />
              </Switch>
            </Container>
            <Footer />
          </div>
        </Router>
      </div>
    );
  }
}

export default App;
