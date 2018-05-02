import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { getNewsArsRdx, getNewsSearchRdx } from '../redux/action.js'

import HeadlineList from './HeadlineList'
import SourceNavbar from './SourceNavbar'

class Headline extends Component {
  componentDidMount() {
    this.getNewsArs()
  }

  getNewsArs = (source) => {
    this.props.getNewsArsRdx(source)
  }

  render () {
    return (
      <div>
        <SourceNavbar getNewsArs={ this.getNewsArs } />
        <HeadlineList></HeadlineList>
      </div>
    );
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

export default connect(stateToProps, dispatchToProps)(Headline);
