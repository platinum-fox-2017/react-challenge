import React, { Component } from 'react';
import axios from "axios";

class CharacterList extends Component {
  constructor() {
    super();
    this.state = {
      persons: []
    }
  }

  componentDidMount() {
    console.log("GrandChild did mount.");
    axios.get('https://swapi.co/api/people/').then(results => {
      const persons = results.data.results
      this.setState({persons})
    })
  }

  render() {
    return (
      <div>
        <ul>
          {
            this.state.persons.map(person =>
              <li key={person.name}>{person.name}</li>
            )
          }
        </ul>
      </div>
    )
  }
}

export default CharacterList;