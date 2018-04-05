import React, { Component } from "react";
import { BrowserRouter, Route, Link } from "react-router-dom";
import logo from "./logo.svg";
import "./App.css";

// list of component
import About from './components/About'
import Home from './components/Home'
import HouseList from './components/HouseList'
import HouseDetail from './components/HouseDetail'

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <h1 className="App-title">Welcome to GOT Wiki</h1>
          </header>
          <ul className="nav justify-content-center">
            <li className="nav-item">
              <Link to="/" className="nav-link">Home</Link>
            </li>
            <li className="nav-item">
              <Link to="/about" className="nav-link">About</Link>
            </li>
            <li className="nav-item">
              <Link to="/houses" className="nav-link">Houses</Link>
            </li>
          </ul>
          <Route exact path='/' component={Home} />
          <Route path='/about' component={About} />
          <Route exact path='/houses' component={HouseList} />
          <Route path='/houses/:houseId' component={HouseDetail} />
        </div>
      </BrowserRouter>
    )
  }
}

export default App