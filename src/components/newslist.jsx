import React, { Component } from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom'
import {connect} from 'react-redux'
import {fetchAllArticles} from '../actions/index'

class newsList extends Component {
  componentDidMount() {
    axios({
      method:'get',
      url:'https://newsapi.org/v2/top-headlines?country=us&apiKey=c007386430cc42208dfe32ba97c739eb'
    }).then(response=>{
        this.props.loadArticles(response.data.articles)
    }).catch(err=>console.log(err))
  }

  render() {
    const {articles} = this.props
    return (
      <div className="container content">
        <div className="row">
         {
          (articles.length> 0 ) ?
           articles.map(function (article, index){
             return <div className="col col-md-3 newsItem text-left" key={index}>
                      <img key={article.title} alt={article.title} src={article.urlToImage} height="140" width="260"/>
                      <Link to={`/article/${index}`}> { article.title }</Link>
                    </div>
           }) : <h1>Loading...</h1>
          }
        </div>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return{
    articles: state.articles
  }
}


const mapDispatchToProps = dispatch => {
  return{
    loadArticles: (payload) => dispatch(fetchAllArticles(payload))
  }
}

export default  connect (mapStateToProps, mapDispatchToProps)(newsList)