import React, {Component} from 'react';
import { Link } from "react-router-dom";
import ArticleCard from './ArticleCard'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { fetchArticles } from '../redux/actions'
import { RingLoader } from 'react-spinners'

class ArticleList extends Component {

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
          <ul className="breadcrumb">
            <li><Link to="/" >Home</Link></li>
          </ul>

          <ArticleCard articles={articles}></ArticleCard>
        </div>
      )
    }
  }
}

const mapStateToProps = (state) => {
  return {
    articles: state.articles,
    loading: state.loading,
    error: state.error
  }
}

const mapDispatchToProps = dispatch => bindActionCreators({
  fetchArticles
  },
  dispatch
) 
export default connect(mapStateToProps, mapDispatchToProps)(ArticleList)
