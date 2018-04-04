import React, { Component } from 'react'
import CharacterBox from './CharcterBox.jsx'

import '../Home.css';

export default class Home extends Component {
  goToDetail = (index) => {
    this.props.history.push(`/character/${index}`)
  }

  render() {
    const { characters } = this.props
    return (
      <div>
        <div className="container">{
          characters.map((character, i) => {
            return <div className="box" key={ i } onClick={ () => this.goToDetail(character.id) }>
              <CharacterBox character={ character }/>
            </div>
          })
        }</div>
      </div>
    )
  }
}
