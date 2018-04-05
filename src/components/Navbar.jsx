import React, { Component } from 'react';
import {Link} from 'react-router-dom'

export default class Navbar extends Component {
  render() {
    return (
      <div className="container content">
        <div className="row">
          <ul className="col text-center">
          <Link to="/"><li><button className="btn btn-primary">Home</button></li></Link>
          <Link to="/search"><li><button className="btn btn-primary">Search</button></li></Link>
          </ul>
        </div>
      </div>
    )
  }
};
