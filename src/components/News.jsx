import React, { Component } from 'react';
import axios from 'axios';

class News extends Component {
    constructor(props) {
        super(props);
        this.state = {
            articles: []
        }
    }
    componentDidMount() {
        axios.get('https://newsapi.org/v2/top-headlines?sources=cnn&apiKey=2e9aaee5201948d48f187726b0896988')
          .then(response => {
            this.setState({
              articles: response.data.articles
            })
          })
      }
    render() {
        return (
            <div className="news-container">
                {
                    this.state.articles.map(article =>
                        <div className="media" key={article.url}>
                            <div className="media-left media-top">
                                <a>
                                    <img className="media-object" src={article.urlToImage} alt={article.urlToImage} min-width="200" height="100" />
                                </a>
                            </div>
                            <div className="media-body">
                                <h4 className="media-heading margin-top-10 justify"><strong>{article.title}</strong></h4>
                                <p className="margin-top-10 justify">{article.description}</p>
                            </div>
                        </div>
                    )
                }
            </div>
        )
    }
}

export default News;