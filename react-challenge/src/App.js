import React, { Component } from 'react';
import './App.css';
import Navbar from './components/Navbar'
import Youtube from './components/Youtube'
import Category from './components/Category'
import { BrowserRouter, Route, Link, Switch } from 'react-router-dom'

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Navbar />

        <Route exact path="/" component={Youtube} />
        <Route path="/category" component={Category} />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
