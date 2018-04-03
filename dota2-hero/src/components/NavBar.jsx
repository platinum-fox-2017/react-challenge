import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class NavBar extends Component {
  render() {
    return (
      <header className="navbar">
        <Link className="navbar-col navbar-logo" to='/'>Home</Link>
        {/* <nav className="navbar-col navbar-logo">Logo</nav> */}
        {/* <nav className="navbar-col navbar-menu">Menu</nav> */}
      </header>
    )
  }
}
