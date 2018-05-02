import React, { Component } from 'react'

export default class CharactersBox extends Component {

  goToDetail = (index) => {
    this.props.history.push(`/detail/${index}`)
  }

  render() {
    return (
      <div>
        <button onClick={ this.props.addCharacter }> Add Character</button>
        <div>
          {
            this.props.characters.map((character, i) => {
              return <div key={ i }>
                <button onClick={ () => this.goToDetail(character.no) }>{ character.name }</button>
              </div>
            })
          }
        </div>
      </div>
      
    )
  }
}
