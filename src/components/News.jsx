import React, { Component } from 'react';
import axios from 'axios';
import { connect } from 'react-redux';
import { getNews } from '../redux/actions';

class News extends Component {
    // constructor(props) {
    //     super(props);
    //     this.state = {
    //         articles: []
    //     }
    // }

    componentDidMount() {
        axios.get('https://newsapi.org/v2/top-headlines?sources=cnn&apiKey=2e9aaee5201948d48f187726b0896988')
            .then(response => {
                this.props.getNews(response.data.articles)
            }).catch(err => {
                console.log(err)
            })
    }
    render() {
        if(this.props.news.length === 0) {
            return (
                <div className="news-container">
                    <h3>Loading...</h3>
                </div>
            )
        }
        return (
            <div className="news-container">
                {
                    this.props.news.map(article =>
                        <div className="media" key={article.url}>
                            <div className="media-left media-top">
                                <a href={article.url} target="_blank">
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

const mapStateToProps = state => {
    return {
        news: state.newsReducers.news
    }
}

const mapDispatchToProps = dispatch => {
    return {
        getNews: (payload) => dispatch(getNews(payload))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(News);