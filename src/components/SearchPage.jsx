import React, { Component } from 'react';
import SearchForm from './SearchForm'
import axios from 'axios';
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'
import {fetchAllArticles} from '../actions/index'

class SearchPage extends Component {
  searchNews(query) {
    axios({
      method:'get',
      url:`https://newsapi.org/v2/everything?q=${query}&apiKey=c007386430cc42208dfe32ba97c739eb`,
    }).then(response=>{
      console.log(response)
      // this.props.loadArticles(response.data.articles)
    }).catch(err=>console.log(err))
  }
  render() {
    const {articles} = this.props
    return (
      <div>
        <SearchForm searchNews={ this.searchNews }/>
        <div className="container content">
        <div className="row">
         {
           articles.map(function (article, index){
             return <div className="col col-md-3 newsItem text-left" key={index}>
                      <img key={article.title} alt={article.title} src={article.urlToImage} height="140" width="260"/>
                      <Link to={`/article/${index}`}> { article.title }</Link>
                    </div>
           })
          }
        </div>
      </div>
      </div>
    )
  }
};
const mapStateToProps = state => ({
  articles: state.articles
})

const mapDispatchToProps = dispatch => {
return{
  loadArticles: (payload) => dispatch(fetchAllArticles(payload))
}
}

export default  connect (mapStateToProps, mapDispatchToProps)(SearchPage)
