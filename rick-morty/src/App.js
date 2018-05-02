import React, { Component } from 'react';
import { connect } from 'react-redux';
import { BrowserRouter, Route } from 'react-router-dom';

import Header from './components/Header.jsx';
import Home from './components/Home.jsx';
import CharacterDetail from './components/CharcterDetail.jsx';

import './App.css';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Header/>
          <div>
              <Route exact path='/'
                render={ (props) => <Home
                  characters = { this.props.characters }
                  { ...props }
                /> }
              />
              <Route exact path='/page/:id'
                render={ (props) => <Home
                  characters = { this.props.characters }
                  { ...props }
                /> }
              />
              <Route path='/character/:id' component={ CharacterDetail }/>
          </div>
        </div>
      </BrowserRouter>
    );
  }
}

const mapStateToProps = (state) => ({
  characters: state.charactersReducers.characters
});

export default connect(mapStateToProps, null)(App);
