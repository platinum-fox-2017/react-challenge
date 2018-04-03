import React, { Component } from 'react'

export default class characterBox extends Component {
  render() {
    const { character } = this.props
    return (
      <div>
        <img className="character-img" src={ character.image } alt={ character.name }/>
        <p>{ character.name }</p>
      </div>
    )
  }
}
