import React, { Component } from 'react'
import Header from './componant/Header';
import Main from './componant/Main';
import ShowFavDrink from './componant/ShowFavDrink'
// import { BrowserRouter, Route, Switch } from "react-router-dom";
import { Navbar,Nav } from 'react-bootstrap'
import "bootstrap/dist/css/bootstrap.min.css";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";


export class App extends Component {
  render() {
    return (
      <>
        <Router>
          <div>
          <Navbar bg="light" expand="lg">
          <Navbar.Brand href="#home">DrinkApp</Navbar.Brand>
          <Nav className="me-auto">
                <Nav.Link href="/">
                <Link to="/">Home</Link>
                </Nav.Link>
               
                <Nav.Link href="/drinkFav">
                <Link to="/drinkFav">drinkFav</Link>
                </Nav.Link>
                </Nav>
              </Navbar>

            {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
            <Switch>
              <Route path="/drinkFav">
                <ShowFavDrink />
              </Route>
              <Route path="/">
                <Main />
              </Route>
            </Switch>
          </div>
        </Router>
      </>
    )
  }
}

export default App

