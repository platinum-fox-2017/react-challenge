import React from 'react'
import { Route } from 'react-router-dom';
import { connect } from 'react-redux'
import { getNewsArsRdx, getNewsSearchRdx } from '../redux/index.js'
import axios from 'axios';

import SearchForm from './SearchForm'
import HeadlineQueryList from './HeadlineQueryList';

import logo from '../logo.svg';

class Search extends React.Component {
  constructor () {
    super()
    this.state = {
      search: '',
      err: '',
      newsLook: [],
      getStatus: false
    }
  }

  searchNews = (query) => {
    let url = 'https://newsapi.org/v2/everything?' +
      `q=${query}&` +
      'language=en&' +
      'sortBy=publishedAt&' +
      'apiKey=7680942fa076452ab0671b9ef5516074';
    this.props.getNewsSearchRdx([])
    this.setState({
      getStatus: true
    })
    axios.get(url).then(response => {
      this.setState({
        getStatus: false
      })
      this.props.getNewsSearchRdx(response.data.articles)
      this.props.history.push(`${this.props.match.path}/query/${query}`)
    }).catch(err => {
      this.setState({
        getStatus: false,
        err: err.message
      })
    })
  }

  render () {
    return (
      <div>
        <h1>Search for News</h1>
        <SearchForm searchNews={ this.searchNews }></SearchForm>
        {
          this.state.getStatus ? <img src={logo} className="App-logo" alt="logo" /> : <div></div>
        }
        <Route path={`${this.props.match.path}/query/:query`} render={() => {
            return <HeadlineQueryList newsLook={ this.props.newsSearch } err={ this.state.err } />
        }}/>
      </div>
    )
  }
}

const stateToProps = (state) => {
  return {
    newsArs: state.newsArs,
    newsSearch: state.newsSearch
  }
}

const dispatchToProps = (dispatch) => {
  return {
    getNewsArsRdx: (news) => dispatch(getNewsArsRdx(news)),
    getNewsSearchRdx: (searchNews) => dispatch(getNewsSearchRdx(searchNews))
  }
}

export default connect(stateToProps, dispatchToProps)(Search);;
