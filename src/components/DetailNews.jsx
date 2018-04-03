import React, { Component } from 'react';
import axios from 'axios';
import moment from 'moment'
export default class DetailNews extends Component {
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
      console.log(response.data.articles);

      const datas = response.data.articles.map(article=> {
        article.publishedAt = moment(article.publishedAt).startOf('hour').fromNow(); 
      })

      this.setState(({datas})=>{
        return {
              articles: response.data.articles
            }
      })
    }).catch(err=>console.log(err))
  }

  render() {
    const id = this.props.match.params.id
    return (
      <div className="container content">
        <div className="row">
        {
          this.state.articles.map(function (article, index){
           if(index === Number(id)){
            return <div className="col col-md-8 offset-md-2 text-left newsItem" key={index}>
              <h3 key={index}>{article.title}</h3>
              <p  className="author">{article.author} - <span className="date">{article.publishedAt}</span></p>
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
};
