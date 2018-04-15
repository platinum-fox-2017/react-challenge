import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { List, Avatar } from 'antd';
import { loadArticleById } from '../store/articles/articles.actions';

class ArticleDetail extends Component {
  componentDidMount() {
    // console.log('params id: ', this.props.match.params.id)
    this.props.loadArticleById(this.props.match.params.id)
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
      const article = this.props.articles.data;
      return (
        <div className="pt-card .modifier">
          <List.Item key={article._id}>
            <List.Item.Meta
              avatar={<Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />}
              title={article.title}
              description={article.content}
              style={{ width: "180%" }}
            />
            <div>{article.createdAt}</div>
          </List.Item>
        </div>
      )
    }
  }
};

const mapStateToProps = (state) => ({
  articles: state.articles,
});

const mapDispatchToProps = (dispatch) => bindActionCreators({
  loadArticleById,
}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(ArticleDetail);