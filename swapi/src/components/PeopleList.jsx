import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { getCardsAct } from '../store/cards/cards.actions'
import { bindActionCreators } from 'redux'

import ErrPage from './ErrPage'
import Loading from './Loading'

class PeopleList extends Component {
  componentDidMount() {
    this.props.getCardsAct()
  }

  render() {
    return (
      <div className="cards-wrapper">
      {
        this.props.cards.loading ?
        <Loading />
        :
        this.props.cards.error ?
        <ErrPage />
        :
        <div className="cards">
          {
            this.props.cards.data.map((card, i) => {
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
      }
      </div>
    );
  }

}

const mapStateToProps = state => ({
  cards: state.cardsReducer
})

const mapDispatchToProps = dispatch => bindActionCreators({
  getCardsAct
}, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(PeopleList);