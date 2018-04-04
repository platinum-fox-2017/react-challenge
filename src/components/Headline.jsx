import React, { Component } from 'react'
import axios from 'axios'
import HeadlineList from './HeadlineList'

import { connect } from 'react-redux'

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

  getNewsArs = () => {
    let url = 'https://newsapi.org/v2/top-headlines?'
      + 'sources=ars-technica&'
      + 'apiKey=7680942fa076452ab0671b9ef5516074'
    axios.get(url).then(response => {
      // console.log(response.data);
      this.setState({
        newsArs: response.data.articles
      })
    }).catch(err => {
      this.setState({
        err: err.message
      })
    })
  }

  render () {
    return (
      <div>
        <h1>Ars Technica News</h1>
        <h2>{ this.state.err }</h2>
        <HeadlineList newsSource={ this.state.newsArs }></HeadlineList>
      </div>
    );
  }
}

const stateToProps = (state) => {
  return {

  }
}

const dispatchToProps = (state) => {
  return {

  }
}

export default connect(stateToProps, dispatchToProps)(Headline);
