import React, { Component } from 'react';
import './App.css';
import { Route } from "react-router-dom";
import ArticleList from './components/ArticleList'
import ArticleDetail from './components/ArticleDetail'

class App extends Component {
  constructor(){
    super();
  }

  render() {
    return (
      <div className="App">
        <div className="container">
          <h1>HackerNews</h1>
          <Route exact path="/" component={ArticleList} />
          <Route exact path="/story/:id" component={ArticleDetail} />
        </div>
      </div>
    );
  }
}

export default App;
