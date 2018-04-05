import React, { Component } from 'react';
import { connect } from 'react-redux';
import axios from 'axios'
import { bindActionCreators } from 'redux';

import { loading, searchingCharacter } from '../redux/characters/characters.actions';
import Loading from './Loading.jsx';
import '../CharacterDetail.css';

class CharacterDetail extends Component {
  render() {
    return (
      <div>{
        this.props.isLoading ?
            <Loading/>
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
    let id = this.props.match.params.id;
    this.props.searchingCharacter(id);
  }
}

const mapStateToProps = (state) => ({
  activeCharacter: state.charactersReducers.activeCharacter,
  isLoading: state.charactersReducers.isLoading
});

const mapDispatchToProps = (dispatch) => bindActionCreators({
  loading,
  searchingCharacter
}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(CharacterDetail);
