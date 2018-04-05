import React from 'react'

const CommentItem = (props) => {
  const { comment } = props
      return (
        <div className="table">
            <div className="table-row" >
              <span style={{ width: '50%'}}>
                {  comment.text}
              </span>
              <span style={{ width: '20%'}}>{ comment.by}</span>
            </div>
        </div>
      )
}

export default CommentItem
