import React, { Component } from 'react';

class Character extends Component {
  render() {
    return (
      <div>
        <div>
          <h1>{ this.props.cardData.name }</h1>
        </div>
        <div className="pokes">
          <div className="poke">
            <img src={ this.props.cardData.imageUrlHiRes } className="singlecard" alt="singlecard"/>
          </div>
          <div className="poke">
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
        </div>
      </div>
    );
  }
}

export default Character;