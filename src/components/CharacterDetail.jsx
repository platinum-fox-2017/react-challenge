import React, { Component } from 'react';
import axios from "axios";
import moment from 'moment'

class CharacterList extends Component {
  constructor() {
    super();
    this.state = {
      person: {}
    }
  }

  componentDidMount() {
    const { match: { params } } = this.props
    axios.get(`https://swapi.co/api/people/${params.personId}`).then(results => {
      const person = results.data
      person.created = moment(person.created).format("dddd, MMMM Do YYYY, h:mm:ss a")
      person.edited = moment(person.edited).format("dddd, MMMM Do YYYY, h:mm:ss a")
      this.setState( {person} )
    })
  }

  render() {
    return (
      <div>
        <ul className="list-group">
          {
            Object.keys(this.state.person).map(key =>
            <li key={key} className="list-group-item">{key} - {this.state.person[key]}</li> )
          }
        </ul>
      </div>
    )
  }
}

export default CharacterList;