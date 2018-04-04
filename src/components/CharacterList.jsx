import React, { Component } from 'react';
import { Link } from "react-router-dom";
import { connect } from 'react-redux'
import * as CharacterActions from '../actions/index'

import axios from 'axios'

class CharacterList extends Component {

  componentDidMount () {
    axios.get('https://swapi.co/api/people/').then(response => {
      this.props.loadCharacters(response.data.results)
    })
  }

  render() {
    if (this.props.chars.length > 0){
      return (
        <div className="col-md-6 offset-md-3">
          <h1>Top 10 Characters Starwars</h1>
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
      )
    }
    else {
      return (
        <div>
          <h1>LOADING...</h1>
          <img src="https://i.pinimg.com/originals/7d/f5/69/7df569c8cd763ff2fbb2a1cc68634d6c.png" alt="Starwars"/>
        </div>
      )
    }
  }
}

const mapStateToProps = (state) => {
  return {
    chars: state.chars
  }
}

// const mapDispatchToProps = dispatch => {
//   return {
//     loadCharacters: () => {
//       // console.log(actionCreators.inputCharacters)
//       return dispatch(CharacterActions.loadCharacters())
//     }
//   }
// }

export default connect(mapStateToProps, CharacterActions)(CharacterList);