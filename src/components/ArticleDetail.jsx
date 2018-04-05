import React, {Component} from 'react';
import CommentList from './CommentList'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { fetchStory } from '../redux/actions'
import { RingLoader } from 'react-spinners'
import ArticleDetailHead from './ArticleDetailHead'
import BreadCrumbDetail from './BreadCrumbDetail'
import Error from './Error'

class ArticleDetail extends Component {

  componentDidMount() {
    const {id} = this.props.match.params
    this.props.fetchStory(id)
  }
  render() {
    const { article, error, loading } = this.props
    
    if (loading) {
      return (
        <div className="centered">
          <RingLoader />
        </div>
      )
    } else if (error) {
      return (
        <Error />
      )
    } else {
      return (
        <div>
          <BreadCrumbDetail />
          <ArticleDetailHead article={article} />
          <h4>Comments</h4>
          <CommentList ></CommentList>
        </div>
      )
    }
  }
}


const mapDispatchToProps = dispatch => bindActionCreators({ fetchStory }, dispatch)
const mapStateToProps = (state) => {
  return {
    article: state.article,
    loading: state.loading,
    error: state.error
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ArticleDetail)
