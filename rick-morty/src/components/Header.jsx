import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/img/rick.png';
import { connect } from 'react-redux';
import axios from 'axios'

import { loading, fetchCharaters, goPage } from '../redux/actions';
// import NavBar from './NavBar.jsx';

class Header extends Component {
  goTo = (toPage) => {
    let page = this.props.pageIndex;
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
    this.props.goPage(page);
    this.props.loading()
    axios.get(`https://rickandmortyapi.com/api/character/?page=${page}`)
      .then(({ data }) => {
        this.props.fetchCharaters(data.results)                
      })
      .catch((err) => {
        window.alert(err)
      });
  }

  render() {
    return (
      <header>
        <div className="App-header">
          <Link to={`/`}>
            <img src={logo} className="App-logo" alt="logo" />
          </Link>
        </div>
        <div>
          <button className="go-btn" onClick={ () => this.goTo('prev') }>PREV</button>
          <button className="go-btn" onClick={ () => this.goTo('next') }>NEXT</button>        
        </div>
        {/* <NavBar/> */}
      </header>
    )
  }
}

const mapStateToProps = (state) => ({
  characters: state.charactersReducer.characters,
  isLoading: state.charactersReducer.isLoading,
  pageIndex: state.charactersReducer.pageIndex
});

const mapDispatchToProps = (dispatch) => ({
  fetchCharaters: (payload) => dispatch(fetchCharaters(payload)),
  goPage: (payload) => dispatch(goPage(payload)),
  loading: () => dispatch(loading())
});

export default connect(mapStateToProps, mapDispatchToProps)(Header);
