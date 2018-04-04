import React, { Component } from 'react'
import { connect } from 'react-redux'
import { getNewsArsRdx, getNewsSearchRdx } from '../redux/index.js'
import axios from 'axios'

import HeadlineList from './HeadlineList'
import SourceNavbar from './SourceNavbar'

class Headline extends Component {
  constructor () {
    super()
    this.state = {
      newsArs: [],
      err: ''
    }
  }

  componentDidMount() {
    this.getNewsArs()
  }

  getNewsArs = (source) => {
    if (!source) {
      source = 'ars-technica'
    }
    let url = 'https://newsapi.org/v2/top-headlines?'
      + `sources=${source}&`
      + 'apiKey=7680942fa076452ab0671b9ef5516074'
    axios.get(url).then(response => {
      // console.log(response.data);
      this.setState({
        newsArs: response.data.articles
      })
      this.props.getNewsArsRdx(response.data.articles)
      // console.log(this.props.newsArs);
    }).catch(err => {
      this.setState({
        err: err.message
      })
    })
  }

  render () {
    return (
      <div>
        <SourceNavbar getNewsArs={ this.getNewsArs } />
        <h2>{ this.state.err }</h2>
        <HeadlineList newsSource={ this.props.newsArs }></HeadlineList>
      </div>
    );
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

export default connect(stateToProps, dispatchToProps)(Headline);
