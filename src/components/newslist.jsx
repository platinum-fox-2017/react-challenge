import React, { Component } from 'react';
import {Link} from 'react-router-dom'
import {connect} from 'react-redux'
import SearchForm from './SearchForm'
import {bindActionCreators} from 'redux'
import {loadNews, searchnews, getNewsByCategory} from '../stores/news/news.action'

class newsList extends Component {
  componentDidMount () {
    this.props.loadNews()
  }
  getNewsByCategory = (category) => {
    this.props.getNewsByCategory(category)
  }
  searchArticles = (query) => {
    this.props.searchnews(query)
  }
  render() {
    const category = this.props.match.params.category
    const {articles}= this.props.articles
    if(this.props.articles.loading){
      return <img src="https://www.fotawildlife.ie/assets/images/site/fotabook-loading.gif" alt="loading"/>
    }else if(this.props.articles.error){
      return <h1>oops..error </h1>
    }else{
      return (
        <div className="container content">
        <div>
          <SearchForm getCategory= {this.getNewsByCategory} search={ this.searchArticles }/>
        </div>
          <div className="row">
           {
             articles.map(function (article, index){
               return <div className="col col-md-3 newsItem text-left" key={index}>
                        <img key={article.title} alt={article.title} src={article.urlToImage} height="140" width="260"/>
                        <Link to={`${category}/article/${article.title}`}> { article.title }</Link>
                      </div>
             })
            }
          </div>
        </div>
      )
    }
    
  }
}

const mapStateToProps = (state) => ({
  articles: state.articles
})


const mapDispatchToProps = (dispatch) => bindActionCreators ({
  loadNews,
  searchnews,
  getNewsByCategory
}, dispatch)

export default  connect (mapStateToProps, mapDispatchToProps)(newsList)