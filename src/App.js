import React, { Component } from "react";
import { BrowserRouter, Route, Link } from "react-router-dom";
import logo from "./logo.svg";
import "./App.css";
import CharacterDetail from './components/CharacterDetail'
import CharacterList from './components/CharacterList'
import About from './components/About'
import Home from './components/Home'

class App extends Component {
  constructor () {
    super()
    this.state = {
      message: 'AndrewKusumaReact'
    }
  }
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <h1 className="App-title">Welcome to {this.state.message}</h1>
          </header>
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
          <Link to="/persons">All Persons</Link>

          <Route exact path='/' component={Home} />
          <Route path='/about' component={About} />
          <Route exact path='/persons' component={CharacterList} />
          <Route path='/persons/:personId' component={CharacterDetail} />
        </div>
      </BrowserRouter>
    )
  }
}

export default App;
