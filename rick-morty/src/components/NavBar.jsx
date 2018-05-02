import React, { Component } from 'react'

import '../assets/style/NavBar.css';

export default class componentName extends Component {
  render() {
    return (
      <nav>
        <ul className="container navbar">
          <li>Home</li>
          <li>Profile</li>
          <li>Logout</li>
        </ul>
      </nav>
    )
  }
}
