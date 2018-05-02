import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { loading, searchingCharacter } from '../redux/characterDetail/characterDetail.actions';
import LoadingLogo from './Loading.jsx';
import '../CharacterDetail.css';

class CharacterDetail extends Component {
goPage(go) {
  let index = this.props.match.params.id
  if(go === 'prev') {
    index--
  } else if(go === 'next') {
    index++
  }

  if(index > 395) { index = 1 }
  else if(index < 1) { index = 394 }

  this.props.loading();
  this.props.searchingCharacter(index);
  this.props.history.push(`/character/${index}`);
}

  render() {
    if (this.props.isLoading) {
      return (
        <LoadingLogo/>
      )
    }  else if (this.props.error) {
      return <h1>Something Wrong!</h1>;
    } else {
      return (
        <div>
            <button onClick={ () => this.goPage('prev') }>PREV</button>
            <button onClick={ () => this.goPage('next') }>NEXT</button>
          <div className="container-detail">
            <div className="character-detail">
              <img className="detail-img" src={ this.props.character.image } alt={ this.props.character.name }/>
              <h2>{ this.props.character.name }</h2>
              <p>Status : { this.props.character.status }</p>
              <p>Species : { this.props.character.species }</p>
              <p>Gender : { this.props.character.gender }</p>
              <p>Location : { this.props.character.location.name }</p>
            </div>
          </div>
        </div>
      )
    }
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
  character: state.characterDetail.character,
  isLoading: state.characterDetail.isLoading
});

const mapDispatchToProps = (dispatch) => bindActionCreators({
  loading,
  searchingCharacter
}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(CharacterDetail);
