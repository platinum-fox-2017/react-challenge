import React, { Component } from 'react';
import { Link } from "react-router-dom";
import axios from "axios";

class CharacterList extends Component {
    constructor() {
      super();
      this.state = {
        persons: []
      }
    }

    componentDidMount() {
      axios.get('https://swapi.co/api/people/').then(results => {
        const persons = results.data.results
        this.setState({persons})
      })
    }

  render() {
    return (
      <div>
        <h1>Ini list char yang ada</h1>
        <ul className="list-group">
          {
            this.state.persons.map((person,index) =>
                <li key={index+1} className="list-group-item">
                  <Link to={`/persons/${index+1}`}>{person.name}</Link>
                </li>
            )
          }
        </ul>
      </div>
    );
  }
}

export default CharacterList;