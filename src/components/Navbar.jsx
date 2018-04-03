import React from 'react'
import {Link} from 'react-router-dom';
import logo from '../logo.svg';
import 'bulma/css/bulma.css'

class Navbar extends React.Component {
  constructor () {
    super()
    this.state = {
      burgerClass: 'navbar-burger',
      menuClass: 'navbar-menu'
    }
  }

  toggleBurger = () => {
    if (this.state.burgerClass === 'navbar-burger') {
      return this.setState({
        burgerClass: 'navbar-burger is-active',
        menuClass: 'navbar-menu is-active'
      })
    } else {
      this.setState({
        burgerClass: 'navbar-burger',
        menuClass: 'navbar-menu'
      })
    }
  }

  render () {
    return (
      <nav className="navbar is-dark">
        <div className="navbar-brand">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="navbar-item has-text-bold is-size-5">NewSpinner</h1>
            <div className={ this.state.burgerClass } onClick={ this.toggleBurger }>
              <span></span>
              <span></span>
              <span></span>
            </div>
        </div>
        <div className={ this.state.menuClass } style={{backgroundColor:'none'}}>
          <div className="navbar-start">
            <Link className="navbar-item" to="/">Home</Link>
            <Link className="navbar-item" to="/search">Search</Link>
          </div>
        </div>
      </nav>
    )
  }
}

export default Navbar;
