import React, { Component } from 'react';
import { BrowserRouter, Route, Link } from 'react-router-dom';
import { connect } from 'react-redux';

import { loading, fetchCharaters } from './redux/actions';

import Home from './components/Home.jsx';
import CharacterDetail from './components/CharcterDetail.jsx';

import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <header className="App-header">
            <Link to={`/`}>
              <img src={logo} className="App-logo" alt="logo" />
            </Link>
          </header>
          <div>{
            !this.props.characters.length ?
            <div>
              <img src={logo} className="App-logo" alt="logo" />
              <p>Awesomeness is Coming . . .</p>
            </div>
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
    fetch(`https://rickandmortyapi.com/api/character`)
      .then((response) => {
        return response.json();
      })
      .then((characters) => {
        this.props.fetchCharaters(characters.results)        
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
