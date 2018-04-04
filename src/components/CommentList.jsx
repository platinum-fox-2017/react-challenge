import React from 'react';
import { connect } from 'react-redux'

const CommentList = (props) => {
  const {comments} = props
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
}

const mapStateToProps = (state) => {
  return {
    comments: state.comments
  }
}
export default connect(mapStateToProps, null)(CommentList)
