import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route } from 'react-router-dom'

import CharactersBox from './components/CharactersBox.jsx'
import CharacterDetail from './components/CharacterDetail.jsx'

class App extends Component {
  constructor () {
    super();
    this.state = {
      characters: []
    }
  }

  addCharacter = (index) => {
    index = Math.floor(Math.random() * 80) + 1
    fetch(`https://swapi.co/api/people/${index}/`)
    .then((response) => {
      if(response.status >= 400) {
        throw new Error(`Character with code ${index} is no available`);
      }
      return response.json();
    })
    .then((character) => {
      if(!character.detail) {
        character.no = index
        this.setState(prevState => ({
          characters: [ ...prevState.characters, character ]
        }))
      }
    })
    .catch((err) => {
      window.alert(err)
    });
  }

  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <h1 className="App-title">Welcome to Star Wars</h1>
          </header>
          <Route exact path='/'
            render={ (props) => <CharactersBox
              addCharacter = { this.addCharacter }
              characters = { this.state.characters }
              { ...props }
            /> }
          />
          <Route path='/detail/:id' component={ CharacterDetail }/>
        </div>
      </BrowserRouter>
    );
  }

  componentDidMount() {
    let count = 5
    while(count) {
      this.addCharacter();
      count--;
    }
  }
}

export default App;
