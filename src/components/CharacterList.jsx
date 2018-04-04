import React, { Component } from 'react';
import { Link } from "react-router-dom";
import { connect } from 'react-redux'
import * as CharacterActions from '../actions/index'

import axios from 'axios'

class CharacterList extends Component {

  componentDidMount () {
    axios.get('https://swapi.co/api/people/').then(response => {
      console.log(response.data.results)
      this.props.loadCharacters(response.data.results)
    })
  }

  render() {
    // console.log(this.props);
    return (
      <div>
        <h1>Top 10 Characters</h1>
        <ul className="list-group">
          {
            this.props.chars && this.props.chars.map((person,index) =>
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

const mapStateToProps = (state) => {
  return {
    chars: state.chars
  }
}

const mapDispatchToProps = dispatch => {
  return {
    loadCharacters: () => {
      // console.log(actionCreators.inputCharacters)
      return dispatch(CharacterActions.loadCharacters())
    }
  }
}

export default connect(mapStateToProps, CharacterActions)(CharacterList);