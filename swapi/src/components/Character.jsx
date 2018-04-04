import React, { Component } from 'react';
import { connect } from 'react-redux';

class Character extends Component {
  render() {
    return (
      <div className="animated fadeIn">
        <div>
          <h1>{ this.props.card.name }</h1>
        </div>
        <div className="pokes">
          <div className="poke"></div>
          <div className="poke">
            <img src={ this.props.card.imageUrlHiRes } className="singlecard" alt="singlecard"/>
          </div>
          <div className="poke">
            <p>HP: { this.props.card.hp }</p>
            <p>Type: { this.props.card.types }</p>
            <p>Rarity: { this.props.card.rarity }</p>
            {/* <p>Weakness: { this.props.card.weaknesses }</p> */}
            <p>Attacks:</p>
              {/* <ul>
                {
                  this.props.card.attacks.map((attack, i) => {
                    return (
                      <li>{ `${attack.name}, damage: ${attack.damage}` }</li>
                    )
                  })
                }
              </ul> */}
          </div>
          <div className="poke"></div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  card: state.card
})

export default connect(mapStateToProps, null)(Character);