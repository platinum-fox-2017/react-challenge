import React, { Component } from 'react';
import { BrowserRouter, Route, Link } from 'react-router-dom'
import logo from './logo.svg';
import './App.css';

import Home from './components/Home.jsx'
import CharacterDetail from './components/CharcterDetail.jsx'

class App extends Component {
  constructor () {
    super();
    this.state = {
      characters: [],
      activeCharacter: {},
      isLoading: true
    }
  }

  addCharacter = () => {
    this.changeLoadingStatus(true)
    fetch(`https://rickandmortyapi.com/api/character`)
    .then((response) => {
      return response.json();
    })
    .then((character) => {
      this.setState(prevState => ({
        characters: [ ...prevState.characters, ...character.results ]
      }))
      this.changeLoadingStatus(false)
    })
    .catch((err) => {
      window.alert(err)
    });
  }

  changeLoadingStatus = (status) => {
    this.setState({
      isLoading: status
    })
  }

  

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
            this.state.isLoading ?
            <div>
              <img src={logo} className="App-logo" alt="logo" />
              <p>Awesomeness is Coming . . .</p>
            </div>
            : 
            <div>
                <Route exact path='/'
                  render={ (props) => <Home
                    characters = { this.state.characters }
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
    this.addCharacter();
  }
}

export default App;
