import React, { Component } from 'react';
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
            <img src="https://pokemontcg.io/assets/images/pokemon-minimalist-30bc8a16a6a63e980a4e06c11a66638b.png" className="App-logo" alt="logo" />
            {/* <h1 className="App-title">All the Star Wars data you've ever wanted!</h1> */}
          </header>
          <Switch>
            <Route exact path="/" component={ Home } />
            <Route exact path="/character" component={ PeopleList } />
            <Route path="/card/:id" component={ CharacterPage } />
            {/* <Route component={ ErrPage } /> */}
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
