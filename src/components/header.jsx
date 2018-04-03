import React, { Component } from 'react';
import logo from '../../src/logo.svg';
import { Link } from 'react-router-dom'

export default class Heading extends Component {
  render() {
    return (
      <div>
        <div className='header'>
          <div className='logo'>
          <Link to="/">
            <img src={logo} className="App-logo" alt="logo" />
          </Link>
          </div>
          <div className='center'>
          <Link to="/">
            <h3> Reactgram</h3>
          </Link>
          </div>
          <div className='login'>
            <a href="https://api.instagram.com/oauth/authorize/?client_id=ad56b4893a2941dcbb59e49d343396b5&redirect_uri=http://localhost:3000&response_type=token">Request Token</a>
          </div>
        </div>
      </div>
    )
  }
};
