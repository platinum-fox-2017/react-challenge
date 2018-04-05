import React from 'react'

const ArticleDetailHead = (props) => {
  const { article } = props
  return (<div className="table">
      <div className="table-row" key={ article.id}>
        <span style={{ width: '40%'}}>
          <h3>{ article.title}</h3>
          <h4>{ article.by}</h4>
          <a href={article.url} target="_blank">Visit Story</a>
        </span>
      </div>
  </div>
  )
}

export default ArticleDetailHead
