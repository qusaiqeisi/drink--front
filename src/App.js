import React, { Component } from 'react'
import Header from './componant/Header';
import Main from './componant/Main';
import ShowFavDrink from './componant/ShowFavDrink'
// import { BrowserRouter, Route, Switch } from "react-router-dom";
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
      <Header />
      <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/drinkFav">drinkFav</Link>
            </li>
          </ul>
        </nav>

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

