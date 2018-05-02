import React, { Component } from 'react' 
import './Navbar.css' 
import {Link} from 'react-router-dom' 
import logo from '../logo.svg';

export default class Navbar extends Component { 
  render() { 
    return (
      <div>
        <nav className="navbar navbar-expand-lg navbar-light fixed-top" id="mainNav">
          <div className="container">
            <Link to='/'>
              <img src={logo} className='brand-logo' alt="logo"/><span className='navbar-brand'>Reactversities</span>
            </Link>
          </div>
        </nav>
      </div>
    ) 
  } 
}