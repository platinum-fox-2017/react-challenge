import React, { Component } from 'react';
import { connect } from 'react-redux';

import { loading, searchCharacter } from '../redux/actions';

import logo from '../logo.svg';

import '../CharacterDetail.css';

class CharacterDetail extends Component {
  render() {
    return (
      <div>{
        this.props.isLoading ?
          <div>
            <img src={logo} className="App-logo" alt="logo" />
            <p>Awesomeness is Coming . . .</p>       
          </div>
          :
          <div className="container-detail">
            <div className="character-detail">
              <img className="detail-img" src={ this.props.activeCharacter.image } alt={ this.props.activeCharacter.name }/>
              <h2>{ this.props.activeCharacter.name }</h2>
              <p>Status : { this.props.activeCharacter.status }</p>
              <p>Species : { this.props.activeCharacter.species }</p>
              <p>Gender : { this.props.activeCharacter.gender }</p>
              <p>Location : {
                this.props.activeCharacter.location && this.props.activeCharacter.location.name }</p>
            </div>
          </div>
      }</div>
    )
  }

  componentWillMount() {
    this.props.loading()
  }

  componentDidMount() {
    let id = this.props.match.params.id
    fetch(`https://rickandmortyapi.com/api/character/${id}`)
      .then((response) => {
        return response.json();
      })
      .then((character) => {
        this.props.searchCharacter(character)
      })
      .catch((err) => {
        window.alert(err)
      });
  }
}

const mapStateToProps = (state) => ({
  activeCharacter: state.activeCharacter,
  isLoading: state.isLoading
});

const mapDispatchToProps = (dispatch) => ({
  searchCharacter: (payload) => dispatch(searchCharacter(payload)),
  loading: () => dispatch(loading())
});

export default connect(mapStateToProps, mapDispatchToProps)(CharacterDetail);
