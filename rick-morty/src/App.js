import React, { Component } from 'react';
import { BrowserRouter, Route, Link } from 'react-router-dom';


import Home from './components/Home.jsx';
import CharacterDetail from './components/CharcterDetail.jsx';

import logo from './logo.svg';
import './App.css';
import connect from 'react-redux/lib/connect/connect';





function fetchCharaters (payload) {
  console.log('Actions ===> payload:', payload)
  return {
    type: 'FETCHCHARACTERS',
    payload: payload
  }
}

class App extends Component {
  constructor () {
    super();
    this.state = {
      characters: [],
      activeCharacter: {},
      isLoading: false
    }
  }

  generateCharacter = () => {
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
    // this.generateCharacter();

    fetch(`https://rickandmortyapi.com/api/character`)
      .then((response) => {
        return response.json();
      })
      .then((characters) => {
        console.log(characters.results)
        this.props.fetchCharaters(characters.results)        
      })
      .catch((err) => {
        window.alert(err)
      });

    // this.props.fetchCharaters(test);
  }
}

const mapStateToProps = (state) => {
  return {
    characters: state.characters
  }
}

const mapDispatchToProps = (dispatch) => ({
  fetchCharaters: (payload) => dispatch(fetchCharaters(payload))
})
export default connect(mapStateToProps, mapDispatchToProps)(App)

// export default App;
