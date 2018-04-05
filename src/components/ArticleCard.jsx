import React from 'react';
import { connect } from 'react-redux'
import ArticleItem from './ArticleItem'

const ArticleCard = (props) => {
  const {articles, searchArticles, isSearch} = props
  if (isSearch && !searchArticles.length) {
    return (
      <div className="centered">
        <h1>The story you are looking for does not exist</h1>
      </div>
    )
  } else if (isSearch && searchArticles.length) {
    return searchArticles.map((article, i) => {
      return (
        <ArticleItem article={article} key={i} />
      )
    })
  } else {

    return articles.map((article, i) => {
      return (
        <ArticleItem article={article} key={i} />
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
