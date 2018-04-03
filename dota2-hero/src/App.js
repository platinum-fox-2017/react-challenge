import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import logo from './logo.svg';
import './App.css';
import NavBar from './components/NavBar';
import Board from './components/Board';
import Detail from './components/Detail';
import './components/Style.css';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <NavBar />
          <Route exact path="/" component={Board}></Route>
          <Route path="/:id" component={Detail}></Route>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
