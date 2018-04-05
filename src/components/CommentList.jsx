import React from 'react';
import { connect } from 'react-redux'
import { RingLoader } from 'react-spinners'
import CommentItem from './CommentItem'

const CommentList = (props) => {
  const {comments, loading, error} = props
  if (loading) {
    return (
      <div className="centered">
        <RingLoader />
      </div>
    )
  } else if(error) {
    return (
      <div className="centered">
        <h1>Opps, Something Went Wrong </h1>
      </div>
    )
  } else if (comments.length) {
    return comments.map((comment, i) => {
      return (
        <CommentItem comment={comment} key={i} />
      )
    })
  } else {
    return (<div className="centered"> There is No Comment</div>)
  }
}

const mapStateToProps = (state) => {
  return {
    comments: state.comments,
    loading: state.loading,
    error: state.error
  }
}
export default connect(mapStateToProps, null)(CommentList)
