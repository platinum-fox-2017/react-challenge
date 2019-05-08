import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Link } from 'react-router-dom';
import { List, Avatar } from 'antd';
import { loadArticles } from '../store/articles/articles.actions';

class ArticleList extends Component {
  componentDidMount() {
    this.props.loadArticles()
  }

  render() {
    if (this.props.articles.loading) {
      return (
        <div style={{margin: "auto", textAlign: "center", marginTop: "20%"}}>
          <div className="pt-spinner .modifier">
            <div className="pt-spinner-svg-container">
              <svg viewBox="0 0 100 100">
                <path className="pt-spinner-track" d="M 50,50 m 0,-44.5 a 44.5,44.5 0 1 1 0,89 a 44.5,44.5 0 1 1 0,-89"></path>
                <path className="pt-spinner-head" d="M 94.5 50 A 44.5 44.5 0 0 0 50 5.5"></path>
              </svg>
            </div>
          </div>
        </div>
      )
    } else if (this.props.articles.error) {
      return <h1>Oops, something error...!!</h1>
    }else {
      const articles = this.props.articles.datas;
      return (
        <div className="pt-card .modifier">
          {
            articles.map(article => (
              <List.Item key={article._id}>
                <List.Item.Meta
                  avatar={<Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />}
                  title={<Link to={`/article/${article._id}`}>{article.title}</Link>}
                  description={article.content}
                  style={{ width: "180%" }}
                />
                <div>{article.createdAt.slice(0, 10)} <br/><small>{article.author.username}</small></div>
              </List.Item>
            ))
          }
        </div>
      )
    }
  }
};

const mapStateToProps = (state) => ({
  articles: state.articles,
});

const mapDispatchToProps = (dispatch) => bindActionCreators({
  loadArticles,
}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(ArticleList);