import React from 'react'
import { Link } from 'react-router-dom'

const ArticleItem = (props) => {
  const { article } = props
      return (
        <div className="table" key={ article.id }>
            <div className="table-row" >
              <span style={ { width: '40%'} }>
                <Link to={'/story/'+ article.id} > { article.title} </Link>
              </span>
              <span style={{ width: '20%'}}>{ article.by}</span>
              <span style={{ width: '20%'}}>Score: { article.score}</span>
            </div>
        </div>
      )
}

export default ArticleItem
