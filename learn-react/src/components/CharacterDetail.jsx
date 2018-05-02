import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import logo from '../logo.svg';

export default class componentName extends Component {
  constructor () {
    super();
    this.state = {
      character: {},
      isLoading: true
    }
  }

  addCharacter = (newCharacter) => {
    this.setState({
      character: newCharacter
    })
  }

  changeLoadingStatus = (status) => {
    this.setState({
      isLoading: status
    })
  }

  render() {
    return (
      <div>
        {
          this.state.isLoading ?
          <div>
            <img src={logo} className="App-logo" alt="logo" />
            <p>Loading . . .</p>
          </div> : 
          <div>
            <p>Name: { this.state.character.name }</p>
            <p>Birth Year: { this.state.character.birth_year }</p>       
            <p>Height: { this.state.character.height }</p>
            <p>Mass: { this.state.character.mass }</p>
            <p>Hair Color: { this.state.character.hair_color }</p>
            <p>Skin Color: { this.state.character.skin_color }</p>
            <Link to={`/`}>
              <button>Home</button>
            </Link>
          </div>
        }
        
      </div>
    )
  }

  componentDidMount() {
    this.changeLoadingStatus(true)
    fetch(`https://swapi.co/api/people/${this.props.match.params.id}/`)
    .then((response) => {
      if(response.status >= 400) {
        throw new Error(`Character with code ${this.props.match.params.id} is no available`);
      }
      return response.json();
    })
    .then((character) => {
      if(!character.detail) {
        this.addCharacter(character)
        this.changeLoadingStatus(false)
      }
    })
    .catch((err) => {
      window.alert(err)
    });
  }
}
