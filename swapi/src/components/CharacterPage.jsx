import React, { Component } from 'react';
import ErrPage from './ErrPage';
import Character from './Character';
import { connect } from 'react-redux';
import { getSingleCard, resetCard } from '../actions/action'

class CharacterPage extends Component {
  checkErr(bool) {
    this.setState(() => ({
      isError: bool
    }))
  }

  componentDidMount() {
    this.getCard()
  }

  getCard() {
    // this.checkErr(false)
    const id = this.props.match.params.id

    fetch(`https://api.pokemontcg.io/v1/cards/${id}`)
      .then((resp) => resp.json())
      .then((data) => {
        console.log(data)
        this.props.getSingle(data)
      }).catch((err) => {
        console.log(err.response)
      })
  }

  backtoList = () => {
    this.props.resetSingleCard()
    this.props.history.push('/')
  }

  render() {
    return (
      <div className="singlepoke">
        { Object.keys(this.props.card).length ? (
          <Character />
        ) : (
          <div>
            <img src="https://media.giphy.com/media/inuVmrCvPaPC/giphy.gif" alt="snorlax" className="onload"/>
            <h3>please wait while we process your request</h3>
          </div>
        ) }
        <div className="wrapper">
          <div className="center">
            <div className="button-wrap">
              <button className="rad-button static small light flat" onClick={ this.backtoList }>Back to List</button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  card: state.card
})

const mapDispatchToProps = dispatch => {
  return {
    getSingle: (data) => dispatch(getSingleCard(data)),
    resetSingleCard: () => dispatch(resetCard())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(CharacterPage);