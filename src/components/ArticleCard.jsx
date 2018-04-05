import React from 'react';
import {Link} from 'react-router-dom'
import { connect } from 'react-redux'

const ArticleCard = (props) => {
  const {articles, searchArticles, isSearch} = props
  if (isSearch && !searchArticles.length) {
    return (
      <div className="centered">
        <h1>The story you are looking for does not exist</h1>
      </div>
    )
  } else if (isSearch && searchArticles.length) {
    return searchArticles.map(article => {
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
    })
  } else {

    return articles.map(article => {
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
    })
  }
}

const mapStateToProps = (state) => {
  return {
    articles: state.articles,
    searchArticles: state.searchArticles,
    isSearch: state.isSearch
  }
}

export default connect(mapStateToProps, null)(ArticleCard)
