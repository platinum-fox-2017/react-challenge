import React, { Component } from 'react';
import { Link } from 'react-router-dom'

class Home extends Component {
  render() {
    return (
      <div>
        <h2>Planets</h2>
        <h2>Films</h2>
        <Link to="/character">
          <h2>People</h2>
        </Link>
        <h2>Spaceships</h2>
      </div>
    );
  }
}

export default Home;