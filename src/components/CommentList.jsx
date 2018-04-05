import React from 'react';
import { connect } from 'react-redux'
import { RingLoader } from 'react-spinners'

const CommentList = (props) => {
  const {comments} = props
  if (comments.length) {
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
    return (<div className="centered"> <RingLoader /></div>)
  }
}

const mapStateToProps = (state) => {
  return {
    comments: state.comments
  }
}
export default connect(mapStateToProps, null)(CommentList)
