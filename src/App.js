import React, { Component } from 'react';
import { BrowserRouter, Route, Link } from 'react-router-dom'
import logo from './logo.svg';
import './App.css';
import Home from './components/Home';
import Repo from './components/Repo';

class App extends Component {
  render() {
    return (
      <div className="App">
        <BrowserRouter>
          <div>
            <nav className="pt-navbar pt-dark .modifier">
              <div className="pt-navbar-group pt-align-left">
                <img src={ logo } className="App-logo" alt="logo" height="52px" width="52px" />
                <div className="pt-navbar-heading">Simple Repository Github</div>
              </div>
              <div className="pt-navbar-group pt-align-right">
                <Link to="/" className="pt-button pt-minimal pt-icon-home">Home</Link>
                <span className="pt-navbar-divider"></span>
                <Link to="http://www.seorangeksa.com" target="_blank" className="pt-button pt-minimal pt-icon-user"></Link>
                <Link to="https://github.com/eksant/react-challenge" target="_blank" className="pt-button pt-minimal pt-icon-git-repo"></Link>
              </div>
            </nav>
            <Route exact path="/" component={ Home } />
            <Route path="/repo/:name" component={ Repo } />
          </div>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
