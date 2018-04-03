import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Switch }  from 'react-router-dom'
import PeopleList from './components/PeopleList'
import CharacterPage from './components/CharacterPage';
import ErrPage from './components/ErrPage';
import Home from './components/Home';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <header className="App-header">
            <img src={ logo } className="App-logo" alt="logo" />
            <h1 className="App-title">All the Star Wars data you've ever wanted!</h1>
          </header>
          <Switch>
            <Route exact path="/" component={ Home } />
            <Route exact path="/character" component={ PeopleList } />
            <Route path="/character/:id" component={ CharacterPage } />
            <Route component={ ErrPage } />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
