import React from 'react';
import {Link} from 'react-router-dom'

const ArticleCard = (props) => {
  const {articles} = props
  return articles.map(article => {
    return (
      <div className="table">
          <div className="table-row" key={ article.id}>
            <span style={{ width: '40%'}}>
              <Link to={`/story/${article.id}`}>{ article.title}</Link>
            </span>
            <span style={{ width: '20%'}}>{ article.by}</span>
            <span style={{ width: '20%'}}>Score: { article.score}</span>
          </div>
      </div>
    )
  })
}

export default ArticleCard
