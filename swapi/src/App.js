import React, { Component } from 'react';
import './App.css';
import { BrowserRouter, Route, Switch, Link }  from 'react-router-dom';
import PeopleList from './components/PeopleList'
import CharacterPage from './components/CharacterPage';
import ErrPage from './components/ErrPage';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <header className="App-header">
            <Link to="/">
              <img src="https://pokemontcg.io/assets/images/pokemon-minimalist-30bc8a16a6a63e980a4e06c11a66638b.png" className="App-logo" alt="logo" />
            </Link>
          </header>
          <Switch>
            <Route exact path="/" component={ PeopleList } />
            <Route path="/card/:id" component={ CharacterPage } />
            <Route component={ ErrPage } />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
