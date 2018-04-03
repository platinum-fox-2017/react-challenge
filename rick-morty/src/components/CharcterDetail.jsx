import React, { Component } from 'react'
import logo from '../logo.svg';

import '../CharacterDetail.css';

export default class CharacterDetail extends Component {
  constructor () {
    super();
    this.state = {
      character: {},
      isLoading: true
    }
  }

  searchCharacter = (index) => {
    this.changeLoadingStatus(true)
    fetch(`https://rickandmortyapi.com/api/character/${index}`)
    .then((response) => {
      return response.json();
    })
    .then((character) => {
      this.changeActiveCharacter(character)
      this.changeLoadingStatus(false)
    })
    .catch((err) => {
      window.alert(err)
    });
  }

  changeActiveCharacter = (character) => {
    this.setState({
      character: character
    })
  }

  changeLoadingStatus = (status) => {
    this.setState({
      isLoading: status
    })
  }

  render() {
    return (
      <div>{
        this.state.isLoading ?
          <div>
            <img src={logo} className="App-logo" alt="logo" />
            <p>Awesomeness is Coming . . .</p>
          </div>
          :
          <div className="container-detail">
            <div className="character-detail">
              <img className="detail-img" src={ this.state.character.image } alt={ this.state.character.name }/>
              <p>{ this.state.character.name }</p>
              <p>Status : { this.state.character.status }</p>
              <p>Species : { this.state.character.species }</p>
              <p>Gender : { this.state.character.gender }</p>
              <p>Location : { this.state.character.location.name }</p>
            </div>
          </div>
      }</div>
    )
  }

  componentDidMount() {
    let id = this.props.match.params.id
    this.searchCharacter(id)
  }
}
