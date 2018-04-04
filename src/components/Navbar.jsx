import React, { Component } from 'react';
import logo from '../logo.svg';

export default class Navbar extends Component {
  
  render() {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <a className="navbar-brand" href="/"><img src={logo} className="App-logo" alt="logo"/></a>
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mr-auto">
              <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                  Menu
                </a>
                <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                  <a className="dropdown-item" href="/gif">Top 20 GIF</a>
                  <a className="dropdown-item" href="/news">Top 20 World News</a>
                </div>
              </li>
            </ul>
            <ul className="navbar-nav">
              <h1>Your TOP #20</h1>
            </ul>
            {/* <form className="form-inline my-2 my-lg-0">
              <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search"/>
              <button className="btn btn-outline-info my-2 my-sm-0" type="submit">Search</button>
            </form> */}
          </div>
        </nav>
    )
  }
};
