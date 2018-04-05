import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getNews, getNewsById } from '../store/news/news.actions';
import Articles from './Articles';
import NewsButtonSwitch from './NewsButtonSwitch';
import { bindActionCreators } from 'redux';

class News extends Component {

    componentDidMount() {
        let id = this.props.match.params.id;
        if (id) {
            this.props.getNewsById(id);
        } else {
            this.props.getNews();
        }
    }

    render() {
        if (this.props.news.loading) {
            return (
                <div className="news-container">
                    <NewsButtonSwitch id={this.props.match.params.id} />
                    <h3>Loading...</h3>
                </div>
            )
        }
        if (this.props.news.error) {
            return (
                <div className="news-container">
                    <NewsButtonSwitch id={this.props.match.params.id}/>
                    <h3>Sorry, something error..</h3>
                </div>
            )
        }
        return (
            <div className="news-container">
                <NewsButtonSwitch id={this.props.match.params.id} />
                {
                    this.props.news.data.map(article =>
                        <Articles article={article} key={article.url} />
                    )
                }
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        news: state.news
    }
}

const mapDispatchToProps = (dispatch) => bindActionCreators({
    getNews, 
    getNewsById
  }, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(News);