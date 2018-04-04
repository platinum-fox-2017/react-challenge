import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import CompetitionList from './components/CompetitionList'
import LeagueTable from './components/LeagueTable'
import ClubDetail from './components/ClubDetail'
import { Route, Switch } from 'react-router-dom'


class App extends Component {
  render() {
    return (
        <div className="App">
          <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <h1 className="App-title">React League Table</h1>
          </header>
          <br/>
          <br/>
          <Switch>
            <Route exact path='/' component={ CompetitionList }/>
            <Route path='/table/:id' component={ LeagueTable }/>
            <Route path='/detail/:idteam' component={ ClubDetail }/>
          </Switch>
        </div>
    );
  }
}

export default App;
