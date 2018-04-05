import React, { Component } from 'react';
import './App.css';
import { Route, Switch } from "react-router-dom";
import ArticleList from './components/ArticleList'
import ArticleDetail from './components/ArticleDetail'
import NotFound from './components/NotFound'

class App extends Component {

  render() {
    return (
      <div className="App">
        <div className="container">
          <h1>HackerNews</h1>
          <Switch>
            <Route exact path="/" component={ArticleList} />
            <Route exact path="/story/:id" component={ArticleDetail} />
            <Route component={NotFound} />
          </Switch>
        </div>
      </div>
    );
  }
}

export default App;
