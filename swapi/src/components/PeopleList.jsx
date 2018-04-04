import React, { Component } from 'react';
import axios from 'axios'
import { Link } from 'react-router-dom'

class PeopleList extends Component {
  constructor () {
    super ()
    this.state = {
      cards: [],
      isLoading: true
    }
  }

  componentDidMount() {
    this.getCards()
  }

  checkLoad(state) {
    this.setState(() => ({
      loading: state
    }))
  }

  getCards() {
    this.checkLoad(true)
    axios.get('https://api.pokemontcg.io/v1/cards')
      .then((response) => {
        const data = response.data.cards.splice(0, 30)
        this.setState((prevState) => {
          return {
            cards: [ ...prevState.cards, ...data ]
          }
        })
        this.checkLoad(false)
      }).catch((err) => {
        console.log(err.response)
      })
    // axios.get('https://swapi.co/api/people')
    //   .then((response) => {
    //     console.log(response.data.results)
    //     this.setState((prevState) => {
    //       return {
    //         people: [ ...prevState.people, ...response.data.results ]
    //       }
    //     })
    //   }).catch((err) => {
    //     console.log(err.response)
    //   })
  }

  render() {
    return (
      <div className="cards-wrapper">
      {
        this.state.loading ?
        <div>
          <img src="https://media.giphy.com/media/inuVmrCvPaPC/giphy.gif" alt="snorlax" className="onload"/>
          <h3>please wait while we process your request</h3>
        </div>
        :
        <div className="cards">
          {
            this.state.cards.map((card, i) => {
              return (
                <div className="card" key={ i }>
                  <Link to={ `/card/${card.id}` }>
                    <img src={ card.imageUrl } className="pokecard" alt="cardimg"/>
                  </Link>
                </div>
              )
            })
          }

          {/* <ul>
            {
              this.state.people.map((person, i) => {
                return (
                  <li key={ i }>
                    <Link to={ `/character/${i+1}` }>
                      { person.name }
                    </Link>
                  </li>
                )
              })
            }
          </ul> */}
        </div>
      }
      </div>
    );
  }
}

export default PeopleList;