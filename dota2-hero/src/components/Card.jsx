import React, { Component } from 'react'
import { Link } from 'react-router-dom';

export default class Card extends Component {
  render() {
    return (
      <Link className="card" to={ '/' + this.props.id }>
        <nav className="card-header">
          { this.props.name }
        </nav>
        <nav className="card-content">
          <img className="hero" src={ 'https://api.opendota.com' + this.props.img_url }/>
        </nav>
      </Link>
    )
  }
}
