import React, { Component } from 'react'
import { Link } from 'react-router-dom';

export default class Card extends Component {
  render() {
    return (
      <Link className={"card card-" + this.props.attr} to={ '/' + this.props.id }>
        <nav className="card-header">
          { this.props.name }
        </nav>
        <nav className="card-content">
          <img className="hero" src={ 'https://api.opendota.com' + this.props.img_url } alt={ this.props.name }/>
        </nav>
      </Link>
    )
  }
}
