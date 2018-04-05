import React, { Component } from 'react';
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux';

import CharacterBox from './CharcterBox.jsx';

import { fetchingCharacters, loading } from '../redux/characters/characters.actions';
import LoadingLogo from './Loading.jsx';

import '../Home.css';

class Home extends Component {

  componentWillMount() {
    this.props.loading()
  }

  componentDidMount() {
    let index = this.props.match.params.id || 1
    this.props.loading()
    this.props.fetchingCharacters(index);
  }

  goToDetail = (index) => {
    this.props.history.push(`/character/${index}`)
  }

  goTo = (toPage) => {
    // let page = this.props.pageIndex;
    let page = this.props.match.params.id || 1
    if(toPage === 'prev') {
      page--
    } else {
      page++
    }
    
    if(page < 1) {
      page = 20;
    }
    else if (page > 20) {
      page = 1
    }
    // this.props.goPage(page);
    this.props.fetchingCharacters(page);
    this.props.history.push(`/page/${page}`);
  }

  render() {
    const { characters } = this.props
    if (this.props.isloading) {
      return (
        <LoadingLogo/>
      )
    }  else if (this.props.error) {
      return <h1>Something Wrong!</h1>;
    } else {
      return (
        <div>
          <button className="go-btn" onClick={ () => this.goTo('prev') }>PREV</button>
          <button className="go-btn" onClick={ () => this.goTo('next') }>NEXT</button>
          <div className="container">{
            characters.map((character, i) => {
              return <div className="box" key={ i } onClick={ () => this.goToDetail(character.id) }>
                <CharacterBox character={ character }/>
              </div>
            })
          }</div>
        </div>
      )
    }
  }
}

const mapStateToProps = (state) => ({
  characters: state.charactersReducers.characters,
  isloading: state.charactersReducers.isLoading,
  pageIndex: state.charactersReducers.pageIndex,
  error: state.charactersReducers.error
});

const mapDispatchToProps = (dispatch) => bindActionCreators({
  loading,
  fetchingCharacters,
}, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(Home);
