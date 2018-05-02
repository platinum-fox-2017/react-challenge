import React, { Component } from 'react';
import moment from 'moment'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import {loadNews, searchnews, getNewsByCategory} from '../stores/news/news.action'

class DetailNews extends Component {
  
  componentDidMount() {
    // console.log('category: ', this.props.match.params.category)
    const category = this.props.match.params.category
    if(category === 'undefined'){
      this.props.loadNews()      
    }else if (category === 'search') {
      this.props.searchnews(this.props.match.params.title) 
    }else{
      this.props.getNewsByCategory(category) 
    }
  }

  render() {
    const {articles} = this.props.articles
    const title = this.props.match.params.title

    if(this.props.articles.loading){
      return <h1>loading...</h1>
    }else if( this.props.articles.error){
      return <h1>ooopss.. error</h1>
    }else{
      return (
        <div className="container content">
          <div className="row">
          {
            articles.map((article)=>{
             if(title === article.title){
              return <div className="col col-md-8 offset-md-2 text-left newsItem" key={article.title}>
                <h3>{article.title}</h3>
                <p  className="author">{article.author} - <span className="date">{moment(article.publishedAt).startOf('hour').fromNow()}</span></p>
                <hr/>
                <img alt={article.title} src={article.urlToImage} width='730'/>
                 <p>{article.description}</p>
                 <p><a href={article.url}>Read More</a></p>
                 </div>
             }
            })
          }
          </div>
        </div>
      )
    }
  }
}

const mapStateToProps = state => ({
  articles: state.articles
})

const mapDispatchToProps = (dispatch) => bindActionCreators({
  loadNews,
  searchnews,
  getNewsByCategory
}, dispatch)

export default  connect (mapStateToProps, mapDispatchToProps)(DetailNews)
