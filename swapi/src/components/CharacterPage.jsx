import React, { Component } from 'react';
import ErrPage from './ErrPage';
import Character from './Character';

class CharacterPage extends Component {
  constructor() {
    super()
    this.state = {
      cardData: {},
      isError: false,
      isLoading: true
    }
  }

  addCardData(data) {
    this.setState((prevState) => {
      return {
        cardData: { ...prevState.charData, ...data.card }
      }
    })
  }

  checkErr(bool) {
    this.setState(() => ({
      isError: bool
    }))
  }

  checkLoad(state) {
    this.setState(() => ({
      isLoading: state
    }))
  }

  componentWillMount() {
    this.getCard()
  }

  getCard() {
    this.checkErr(false)
    this.checkLoad(true)
    const id = this.props.match.params.id

    fetch(`https://api.pokemontcg.io/v1/cards/${id}`)
      .then((resp) => resp.json())
      .then((data) => {
        this.addCardData(data)
        this.checkLoad(false)
      }).catch((err) => {
        console.log(err.response)
        this.checkErr(true)
      })
  }

  backtoList = () => {
    this.props.history.push('/')
  }

  render() {
    return (
      <div className="singlepoke">
        { this.state.isLoading ? (
          <div>
            <img src="https://media.giphy.com/media/inuVmrCvPaPC/giphy.gif" alt="snorlax" className="onload"/>
            <h3>please wait while we process your request</h3>
          </div>
        ) : (
          <Character cardData={ this.state.cardData }/>
        ) }
        
        <button onClick={ this.backtoList }>Back To List</button>
      </div>
    );
  }
}

export default CharacterPage;