import React, { Component } from 'react';
import axios from "axios";
import moment from 'moment'
import { connect } from 'react-redux'
import * as CharacterActions from '../actions/index'

class CharacterList extends Component {

  componentDidMount() {
    const { match: { params } } = this.props
    axios.get(`https://swapi.co/api/people/${params.personId}`).then(results => {
      const person = results.data
      person.created = moment(person.created).format("dddd, MMMM Do YYYY, h:mm:ss a")
      person.edited = moment(person.edited).format("dddd, MMMM Do YYYY, h:mm:ss a")
      this.props.loadCharacter(person)
    })
  }

  render() {
    return (
      <div className="col-md-6 offset-md-3">
        <ul className="list-group">
          {
            Object.keys(this.props.char).map(key =>
            <li key={key} className="list-group-item">
            <span>{key} - {this.props.char[key]}</span></li> )
          }
        </ul>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    char: state.char
  }
}

export default connect(mapStateToProps, CharacterActions)(CharacterList)