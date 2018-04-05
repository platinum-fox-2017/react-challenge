import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/img/rick.png';

export default class Header extends Component {

  render() {
    return (
      <header>
        <div className="App-header">
          <Link to={`/`}>
            <img src={logo} className="App-logo" alt="logo" />
          </Link>
        </div>
        {/* <NavBar/> */}
      </header>
    )
  }
}
