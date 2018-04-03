import React, {Component} from 'react';
import { Link } from "react-router-dom";
import ArticleCard from './ArticleCard'

class ArticleList extends Component {

  constructor(){
    super();
    this.state = {
      articles: [],
      articlesID: [],
      error: null
    }
  }

  fetchTopArticlesID = () => {
    const app = this
    fetch('https://hacker-news.firebaseio.com/v0/topstories.json?print=pretty')
         .then(response => response.json())
         .then(result => {
           app.setState({articlesID: result.slice(0,9)})
           app.fetchDetailTopArticlesID()
         })
         .catch(e => this.setState({error: e}))
  }

  fetchDetailTopArticlesID = () => {
    const app = this
    const {articlesID} = this.state
    articlesID.forEach(id => {
      fetch(`https://hacker-news.firebaseio.com/v0/item/${id}.json?print=pretty`)
           .then(response => response.json())
           .then(result => {
             app.setState( prevState => ({articles:[...prevState.articles, result]}))
           })
           .catch(e => this.setState({error: e}))
    })
  }

  componentDidMount() {
    this.fetchTopArticlesID()
  }
  render() {
    const { articles, error } = this.state
    if (!articles.length) {
      return (
        <div className="table">
            <div className="table-row">
              <span style={{ width: '100%'}}>No Story Found</span>
            </div>
        </div>
      )
    } else {
      return (
        <div>
          <ul class="breadcrumb">
            <li><Link to="/" >Home</Link></li>
          </ul>
          <ArticleCard articles={articles}></ArticleCard>
        </div>
      )
    }
  }
}
export default ArticleList
