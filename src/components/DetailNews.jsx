import React, { Component } from 'react';
import axios from 'axios';
import moment from 'moment'
import {connect} from 'react-redux'
import {fetchAllArticles} from '../actions/index'

class DetailNews extends Component {
  componentDidMount() {
    axios({
      method:'get',
      url:'https://newsapi.org/v2/top-headlines?country=us&apiKey=c007386430cc42208dfe32ba97c739eb',
    }).then(response=>{
      this.props.loadArticles(response.data.articles)
    }).catch(err=>console.log(err))
  }

  render() {
    const {articles} = this.props
    const id = this.props.match.params.id
    return (
      <div className="container content">
        <div className="row">
        {
          articles.map(function (article, index){
           if(index === Number(id)){
            return <div className="col col-md-8 offset-md-2 text-left newsItem" key={index}>
              <h3 key={index}>{article.title}</h3>
              <p  className="author">{article.author} - <span className="date">{moment(article.publishedAt).startOf('hour').fromNow()}</span></p>
              <hr/>
              <img key={article.title} alt={article.title} src={article.urlToImage} width='730'/>
               <p key={article.description}>{article.description}</p>
               <p key={article.url}><a href={article.url}>Read More</a></p>
               </div>
           }
          })
        }
        </div>
      </div>
    )
  }
}

const mapStateToProps = state => ({
    articles: state.articles
})

const mapDispatchToProps = dispatch => {
  return{
    loadArticles: (payload) => dispatch(fetchAllArticles(payload))
  }
}

export default  connect (mapStateToProps, mapDispatchToProps)(DetailNews)
