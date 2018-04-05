import React, { Component } from 'react';
import logo from '../../logo.svg';
import { Link } from 'react-router-dom';

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
              <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                  Category
                </a>
                <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                  <Link to={`/news/entertainment`} className="dropdown-item" onClick={ () => this.props.getNewsCategory('entertainment') }> Entertainment </Link>
                  <Link to={`/news/business`} className="dropdown-item" onClick={ () => this.props.getNewsCategory('business') }>Business</Link>
                  <Link to={`/news/health`} className="dropdown-item" onClick={ () => this.props.getNewsCategory('health') }>Health</Link>
                  <Link to={`/news/technology`} className="dropdown-item" onClick={ () => this.props.getNewsCategory('technology') }>Technology</Link>
                  <Link to={`/news/sport`} className="dropdown-item" onClick={ () => this.props.getNewsCategory('sport') }>Sport</Link>
                  <Link to={`/news/science`} className="dropdown-item" onClick={ () => this.props.getNewsCategory('science') }>Science</Link>
                </div>
              </li>
            </ul>
          </div>
        </nav>
    )
  }
};
