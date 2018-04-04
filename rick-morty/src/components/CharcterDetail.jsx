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
    this.setState(prevState => ({
      activeCharacter: { ...prevState.activeCharacter, ...character }
    }))
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
              <img className="detail-img" src={ this.state.activeCharacter.image } alt={ this.state.activeCharacter.name }/>
              <h2>{ this.state.activeCharacter.name }</h2>
              <p>Status : { this.state.activeCharacter.status }</p>
              <p>Species : { this.state.activeCharacter.species }</p>
              <p>Gender : { this.state.activeCharacter.gender }</p>
              <p>Location : { this.state.activeCharacter.location.name }</p>
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
