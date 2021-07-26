import React, { Component } from 'react'
import Header from './componant/Header';
import Main from './componant/Main';
import ShowFavDrink from './componant/ShowFavDrink'
import { BrowserRouter, Route, Switch } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";


export class App extends Component {
  render() {
    return (
      <>
      <Header />
      <BrowserRouter>
        <Switch>
          <Route exact path="/">
            <Main />
          </Route>
          <Route exact path="/drinkFav">
            <ShowFavDrink/>
          </Route>
        </Switch>
      </BrowserRouter>
    </>
    )
  }
}

export default App

