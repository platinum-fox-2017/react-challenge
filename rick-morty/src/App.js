import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { BrowserRouter, Route } from 'react-router-dom';

import { fetchingCharacters, loading } from './redux/characters/characters.actions';
import Header from './components/Header.jsx';
import Loading from './components/Loading.jsx';
import Home from './components/Home.jsx';
import CharacterDetail from './components/CharcterDetail.jsx';

import './App.css';

class App extends Component {
  
  componentDidMount() {
    this.props.fetchingCharacters(this.props.pageIndex);
  }
  
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Header/>
          <div>{
            !this.props.characters.length ?
            // <Loading/>
            <div>
              wow{ JSON.stringify(this.props.characters) }wiw
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
}

const mapStateToProps = (state) => ({
  characters: state.charactersReducers.characters,
  isLoading: state.charactersReducers.isLoading,
  pageIndex: state.charactersReducers.pageIndex
});

const mapDispatchToProps = (dispatch) => bindActionCreators({
  loading,
  fetchingCharacters,
}, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(App);
