import React, {Component} from 'react';
import CommentList from './CommentList'
import { bindActionCreators } from 'redux'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { fetchStory } from '../redux/actions'
import { RingLoader } from 'react-spinners'

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
        <div className="centered">
          <h1>Opps, Something Went Wrong </h1>
        </div>
      )
    } else {
      return (
        <div>
          <ul className="breadcrumb">
            <li><Link to="/" >Home</Link></li>
            <li>Detail Story</li>
          </ul>
          <div className="table">
              <div className="table-row" key={ article.id}>
                <span style={{ width: '40%'}}>
                  <h3>{ article.title}</h3>
                  <h4>{ article.by}</h4>
                  <a href={article.url} target="_blank">Visit Story</a>
                </span>
              </div>
          </div>
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
