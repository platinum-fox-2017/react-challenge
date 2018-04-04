import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import { connect } from 'react-redux';
import axios from 'axios';

import { loading, fetchCharaters } from './redux/actions';
import Header from './components/Header.jsx';
import Loading from './components/Loading.jsx';
import Home from './components/Home.jsx';
import CharacterDetail from './components/CharcterDetail.jsx';

import './App.css';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Header/>
          <div>{
            !this.props.characters.length ?
            <Loading/>
            : 
            <div>
                <Route exact path='/'
                  render={ (props) => <Home
                    characters = { this.props.characters }
                    { ...props }
                  /> }
                />
                <Route path='/character/:id' component={ CharacterDetail }/>
            </div>
          }</div>
        </div>
      </BrowserRouter>
    );
  }

  componentDidMount() {

    axios.get(`https://rickandmortyapi.com/api/character/?page=${this.state.index}`)
      .then(({ data }) => {
        this.props.fetchCharaters(data.results)                
      })
      .catch((err) => {
        window.alert(err)
      });
    }
}

const mapStateToProps = (state) => ({
  characters: state.characters,
  isLoading: state.isLoading
});

const mapDispatchToProps = (dispatch) => ({
  fetchCharaters: (payload) => dispatch(fetchCharaters(payload)),
  loading: () => dispatch(loading())
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
