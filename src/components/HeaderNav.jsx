import React, { Component } from 'react' 
import logo from '../logo-white.svg'
import './HeaderNav.css'

export default class HeaderNav extends Component { 
  render() { 
    return (
      <div>
        <header className="masthead">
          <div className="overlay"></div>
          <div className="container ">
            <div className="row ">
              <div className="col-lg-8 col-md-10 mx-auto header-wrapper">
              <img className='header-logo' src={logo} alt="" />
                <div className="site-heading">
                  <h1>Reactversities</h1>
                  <span className="subheading">Find all universities here</span>
                </div>
              </div>
            </div>
          </div>
        </header>
      </div>
    ) 
  } 
}