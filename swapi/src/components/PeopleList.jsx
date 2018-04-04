import React, { Component } from 'react';
import axios from 'axios'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { getCardsAct, resetCard } from '../actions/action'

class PeopleList extends Component {
  componentDidMount() {
    this.getCards()
    this.props.resetSingleCard()
  }

  getCards() {
    axios.get('https://api.pokemontcg.io/v1/cards')
      .then((response) => {
        const data = response.data.cards.splice(0, 30)
        this.props.getCards(data)
      }).catch((err) => {
        console.log(err.response)
      })
  }

  render() {
    return (
      <div className="cards-wrapper">
      {
        this.props.cards.length ?
        <div className="cards">
          {
            this.props.cards.map((card, i) => {
              return (
                <div className="card" key={ i }>
                  <Link to={ `/card/${card.id}` }>
                    <img src={ card.imageUrl } className="pokecard animated fadeIn" alt="cardimg"/>
                  </Link>
                </div>
              )
            })
          }
        </div>
        :
        <div>
          <img src="https://media.giphy.com/media/inuVmrCvPaPC/giphy.gif" alt="snorlax" className="onload"/>
          <h3>please wait while we process your request</h3>
        </div>
      }
      </div>
    );
  }

}

const mapStateToProps = state => ({
  cards: state.cards
})

const mapDispatchToProps = dispatch => {
  return {
    getCards: (cards) => dispatch(getCardsAct(cards)),
    resetSingleCard: () => dispatch(resetCard())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(PeopleList);