import React, { Component } from 'react';

class Character extends Component {
  render() {
    return (
      <div>
        <h1>{ this.props.cardData.name }</h1>
        <img src={ this.props.cardData.imageUrlHiRes } className="singlecard" alt="singlecard"/>
        <p>HP: { this.props.cardData.hp }</p>
        <p>Type: { this.props.cardData.types }</p>
        <p>Rarity: { this.props.cardData.rarity }</p>
        {/* <p>Weakness: { this.props.cardData.weaknesses }</p> */}
        <p>Attacks:</p>
          {/* <ul>
            {
              this.props.cardData.attacks.map((attack, i) => {
                return (
                  <li>{ `${attack.name}, damage: ${attack.damage}` }</li>
                )
              })
            }
          </ul> */}
      </div>
    );
  }
}

export default Character;