import React, {Component} from 'react';
import { Link } from "react-router-dom";
import ArticleCard from './ArticleCard'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { fetchArticles, searchStory, clearSearch } from '../redux/actions'
import { RingLoader } from 'react-spinners'
import Error from './Error'
import SearchForm from './SearchForm'
import BreadCrumbHome from './BreadCrumbHome'

class ArticleList extends Component {

  componentDidMount() {
    this.props.fetchArticles()
  }
  render() {
    const {loading, error } = this.props
    if (loading) {
      return (
        <div>
          <div className="centered">
            <RingLoader />
          </div>
        </div>
      )
    }  else if (error) {
      return <Error />
    }  else {
      return (
        <div>
          <SearchForm />
          <BreadCrumbHome />
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

const mapDispatchToProps = dispatch => bindActionCreators({fetchArticles}, dispatch) 
export default connect(mapStateToProps, mapDispatchToProps)(ArticleList)
