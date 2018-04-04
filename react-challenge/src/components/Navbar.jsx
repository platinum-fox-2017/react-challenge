import React, { Component } from 'react'
import { BrowserRouter, Route, Link, Switch } from 'react-router-dom'

export default class Navbar extends Component {
  render() {
    return (
      <div className="container-fluid">
      <nav className="navbar navbar-default">
        <div className="container-fluid">
          <div className="navbar-header">
            <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar" aria-expanded="false"
              aria-controls="navbar">
              <span className="sr-only">Toggle navigation</span>
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
            </button>
            <Link to="/">
              <a className="navbar-brand">MY TUBE</a>
            </Link>
          </div>
          <div id="navbar" className="navbar-collapse collapse">
            <ul className="nav navbar-nav navbar-right">
            <li><Link to="/">Home</Link></li>
            <li><Link to="/category">Category</Link></li>
            <li><a disabled>Welcome</a></li>
            </ul>
          </div>
        </div>
      </nav>
  
    </div>
    )
  }
}
