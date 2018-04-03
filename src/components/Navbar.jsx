import React from 'react'
import {Link} from 'react-router-dom';
import logo from '../logo.svg';

import 'bulma/css/bulma.css'

class Navbar extends React.Component {
  render () {
    return (
      <nav className="navbar is-dark">
        <div className="navbar-brand">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">NewSpinner</h1>
        </div>
        <div className="navbar-menu">

        </div>
        <div className="navbar-start">
          <Link className="navbar-item has-text-white" to="/">Home</Link>
          <Link className="navbar-item has-text-white" to="/search">Search</Link>
        </div>
      </nav>

    )
  }
}

export default Navbar;
