import React, { Component } from 'react';
import SearchForm from './SearchForm'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import {searchnews} from '../stores/news/news.action'

class SearchPage extends Component {
  searchArticles = (query) => {
    this.props.searchnews(query)
  }
  render() {
    const {articles} = this.props.articles
    if(this.props.articles.loading){
      return <img src="https://www.fotawildlife.ie/assets/images/site/fotabook-loading.gif" alt="loading"/>
    }else if(this.props.articles.error){
      return <h1>oops..error </h1>
    }else{
    return (
      <div>
        <SearchForm search={ this.searchArticles }/>
        <div className="container content">
        <div className="row">
         {
           articles.map(function (article){
             return <div className="col col-md-3 newsItem text-left" key={article.url}>
                      <img alt={article.title} src={article.urlToImage} height="140" width="260"/>
                      <p>{ article.title }</p>
                    </div>
           })
          }
        </div>
      </div>
      </div>
    )
  }
  }
};
const mapStateToProps = state => ({
  articles: state.articles
})

const mapDispatchToProps = (dispatch) => bindActionCreators ({
  searchnews
}, dispatch)

export default connect (mapStateToProps, mapDispatchToProps)(SearchPage)
