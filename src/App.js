import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import Heading from './components/header'
import Feed from './components/feed'
import Display from './components/display'
import { BrowserRouter, Route, Switch } from 'react-router-dom'

class App extends Component {
  constructor () {
    super()
    this.state = {
      feeds: []
    }
  }
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Heading />
          <Switch>
            <Route exact path='/images/:id' component= { Display }/>
            <Route path='/' component= { Feed } />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App
