import React, { Component } from 'react';
import { BrowserRouter, Route, Link } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './store';
import ArticleList from './components/ArticleList';
import Repos from './components/Repos';
import Repo from './components/Repo';
import Login from './components/Login';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <BrowserRouter>
          <div className="App">
            <div>
              <nav className="pt-navbar pt-dark .modifier">
                <div className="pt-navbar-group pt-align-left">
                  <img src={ logo } className="App-logo" alt="logo" height="52px" width="52px" />
                  <div className="pt-navbar-heading">Simple Blog React</div>
                </div>
                <div className="pt-navbar-group pt-align-right">
                  <Link to="/" className="pt-button pt-minimal pt-icon-book">Blog</Link>
                  <Link to="/repos" className="pt-button pt-minimal pt-icon-git-branch">Repo</Link>
                  <span className="pt-navbar-divider"></span>
                  <Link to="https://github.com/eksant/react-challenge" target="_blank" className="pt-button pt-minimal pt-icon-git-repo"></Link>
                  <Link to="/login" className="pt-button pt-minimal pt-icon-user"> Login</Link>
                </div>
              </nav>
              <Route exact path="/" component={ ArticleList } />
              <Route exact path="/login" component={ Login } />
              <Route exact path="/repos" component={ Repos } />
              <Route exact path="/repo/:name" component={ Repo } />
            </div>
          </div>
        </BrowserRouter>
      </Provider>
    );
  }
}

export default App;
