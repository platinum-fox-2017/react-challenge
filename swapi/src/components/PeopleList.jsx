import React, { Component } from 'react';
import axios from 'axios'
import { Link } from 'react-router-dom'

class PeopleList extends Component {
  constructor () {
    super ()
    this.state = {
      people: []
    }
  }

  componentDidMount() {
    this.getPeople()
  }

  getPeople() {
    // axios.get('https://api.got.show/api/characters/')
    //   .then((response) => {
    //     console.log(response)
    //     const char = response.data.filter(character => character.imageLink).splice(0, 15)
    //     console.log(char)
    //   }).catch((err) => {
    //     console.log(err.response)
    //   })
    axios.get('https://swapi.co/api/people')
      .then((response) => {
        console.log(response.data.results)
        this.setState((prevState) => {
          return {
            people: [ ...prevState.people, ...response.data.results ]
          }
        })
      }).catch((err) => {
        console.log(err.response)
      })
  }

  render() {
    return (
      <div className="people">
        <ul>
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
        </ul>
      </div>
    );
  }
}

export default PeopleList;