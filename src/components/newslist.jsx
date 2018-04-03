import React, { Component } from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom'

export default class newsList extends Component {
  constructor(){
    super()
    this.state = {
      articles: []
    }
  }
  componentDidMount() {
    axios({
      method:'get',
      url:'https://newsapi.org/v2/top-headlines?country=us&apiKey=c007386430cc42208dfe32ba97c739eb',
      Headers : {
        token: 'c007386430cc42208dfe32ba97c739eb'
      }
    }).then(response=>{
      this.setState(()=>{
        return {
          articles: response.data.articles
        }
      })
      // console.log(response.data.articles)
    }).catch(err=>console.log(err))
  }
  render() {
    return (
      <div className="container content">
        <div className="row">
         {
           this.state.articles.map(function (article, index){
             return <div className="col col-md-3 newsItem text-left" key={index}>
                      <img key={article.title} alt={article.title} src={article.urlToImage} height="140"/>
                      <Link to={`/article/${index}`}> { article.title }</Link>
                    </div>
           })
          }
        </div>
      </div>
    )
  }
};