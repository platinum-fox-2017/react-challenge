import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import ListTeam from './components/ListTeam'
import Lost from './components/Lost'
import Home from './components/Home'
import Player from './components/Player'
import { BrowserRouter,Route,Switch,Link } from 'react-router-dom'

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <h1 className="App-title">Have fun with React</h1>
          </header>
          <ul className="title">
            <li>
              <Link to={'/'}>
                Home
              </Link>
            </li>
            <li>
              <Link to={'/team'}>
                List Dota Team
              </Link>
            </li>
          </ul>
          <Switch>
            <Route exact path="/" component={ Home }/>
            <Route path="/team" component={ ListTeam }/>
            <Route path="/player/:id_team" component={ Player }/>
            <Route component={Lost}/>
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
