import React from 'react';
import { connect } from 'react-redux'
import { RingLoader } from 'react-spinners'

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
    return comments.map(comment => {
      return (
        <div className="table">
            <div className="table-row" key={ comment.id}>
              <span style={{ width: '50%'}}>
                {  comment.text}
              </span>
              <span style={{ width: '20%'}}>{ comment.by}</span>
            </div>
        </div>
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
