import React, { Component } from 'react';
import { DEFAULT_QUERY, DEFAULT_HPP, PATH_BASE, PATH_SEARCH, PARAM_SEARCH, PARAM_PAGE, PARAM_HPP,
} from './constants';
import './App.css';

class App extends Component {
  constructor(){
    super();
    this.state = {
      articles: [],
      searchKey: '',
      searchTerm: DEFAULT_QUERY,
      error: null
    }
  }
  fetchArticles = (searchTerm,page = 0) => {
    const app = this
    const urlFetch = `${PATH_BASE}${PATH_SEARCH}?${PARAM_SEARCH}${searchTerm}&${PARAM_PAGE}${page}&${PARAM_HPP}${DEFAULT_HPP}`
    fetch(urlFetch)
         .then(response => response.json())
         .then(result => {
           app.setState({ articles: result.hits})
           console.log(result.hits)
         })
         .catch(e => this.setState({error: e}))
  }
  componentDidMount() {
    const { searchTerm } = this.state
    this.setState({ searchKey: searchTerm })
    this.fetchArticles(searchTerm)
  }
  render() {
    const { articles, error } = this.state

    return (
      <div className="App">
        <div className="container">
          <h1>HackerNews</h1>

            <div className="table">
              {
              error ?
                <div className="table-row">
                  Something Went Wrong
                </div>
              :
                if (articles.length) {
                  articles.map(article => {
                    return (
                      <div className="table-row" key={ article.objectID}>
                        <span style={{ width: '40%'}}>{ article.title}</span>
                        <span style={{ width: '20%'}}>{ article.author}</span>
                        <span style={{ width: '10%'}}>{ article.created_at}</span>
                      </div>
                    )
                  })
                } else {
                  <div className="table-row">
                    No Article Found
                  </div>
                }
              }
            </div>
        </div>
      </div>
    );
  }
}

export default App;
