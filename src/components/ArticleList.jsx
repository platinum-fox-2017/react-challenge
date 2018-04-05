import React, {Component} from 'react';
import { Link } from "react-router-dom";
import ArticleCard from './ArticleCard'
import { connect } from 'react-redux'
import { fetchArticles } from '../redux/actions'
import { RingLoader } from 'react-spinners'

class ArticleList extends Component {

  constructor(){
    super();
    this.state = {
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
             app.props.fetchArticles(result) 
           })
           .catch(e => this.setState({error: e}))
    })
  }

  componentDidMount() {
    this.fetchTopArticlesID()
  }
  render() {
    const { articles } = this.props
    if (!articles.length) {
      return (
        <div>
          <div className="centered">
            <RingLoader />
          </div>
        </div>

      )
    } else {
      return (
        <div>
          <ul className="breadcrumb">
            <li><Link to="/" >Home</Link></li>
          </ul>

          <ArticleCard articles={articles}></ArticleCard>
        </div>
      )
    }
  }
}

const mapStateToProps = (state) => {
  return {
    articles: state.articles
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    fetchArticles: (articles) => dispatch(fetchArticles(articles))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ArticleList)
