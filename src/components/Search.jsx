import React from 'react'
import { bindActionCreators } from 'redux'
import { Route } from 'react-router-dom';
import { connect } from 'react-redux'
import { getNewsArsRdx, getNewsSearchRdx } from '../redux/index.js'

import SearchForm from './SearchForm'
import HeadlineQueryList from './HeadlineQueryList';

import logo from '../logo.svg';

class Search extends React.Component {
  searchNews = (query) => {
    this.props.getNewsSearchRdx(query)
    this.props.history.push(`${this.props.match.path}/query/${query}`)
  }

  render () {
    return (
      <div>
        <SearchForm searchNews={ this.searchNews }></SearchForm>
        {
          this.props.isLoading ? <img src={logo} className="App-logo" alt="logo" /> : <div></div>
        }
        <Route path={`${this.props.match.path}/query/:query`} render={() => {
            return <HeadlineQueryList />
        }}/>
      </div>
    )
  }
}

const stateToProps = (state) => {
  return {
    isLoading: state.isLoading,
    err: state.err,
    newsArs: state.newsArs,
    newsSearch: state.newsSearch
  }
}

const dispatchToProps = (dispatch) => bindActionCreators({
  getNewsArsRdx,
  getNewsSearchRdx
}, dispatch)

export default connect(stateToProps, dispatchToProps)(Search);;
