import React, {Component} from 'react';
import { Link } from "react-router-dom";
import ArticleCard from './ArticleCard'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { fetchArticles, searchStory, clearSearch } from '../redux/actions'
import { RingLoader } from 'react-spinners'

class ArticleList extends Component {
  constructor () {
    super()
    this.state = {
      query: null,
      isSearch: false
    }
  }

  changeInput = (e) => {
    this.setState({query: e.target.value})
  }

  submitSearch = () => {
    this.props.searchStory(this.state.query)
  }

  clearSearch = () => {
    this.setState({query: null})
    this.props.clearSearch()
  }

  componentDidMount() {
    this.props.fetchArticles()
  }
  render() {
    const { articles, loading, error } = this.props
    if (loading) {
      return (
        <div>
          <div className="centered">
            <RingLoader />
          </div>
        </div>
      )
    }  else if (error) {
      return (
        <div>
          <div className="centered">
            <h1>Opps, Something Went Wrong</h1>
          </div>
        </div>
      )
    }  else {
      return (
        <div>
          <input type="text" className="input-text" value={this.state.query} onChange={this.changeInput} />
          <button className="button" onClick={this.submitSearch}>Search </button>
          <button className="button" onClick={this.clearSearch}>Clear</button>
          <ul className="breadcrumb">
            <li><Link to="/" >Home</Link></li>
          </ul>
          <ArticleCard ></ArticleCard>
        </div>
      )
    }
  }
}

const mapStateToProps = (state) => {
  return {
    loading: state.loading,
    error: state.error
  }
}

const mapDispatchToProps = dispatch => bindActionCreators({fetchArticles, searchStory, clearSearch}, dispatch) 
export default connect(mapStateToProps, mapDispatchToProps)(ArticleList)
