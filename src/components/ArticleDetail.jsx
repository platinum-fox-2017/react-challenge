import React, {Component} from 'react';
import CommentList from './CommentList'
import { Link } from 'react-router-dom'

class ArticleDetail extends Component {

  constructor(){
    super();
    this.state = {
      comments: [],
      story: {},
      error: null
    }
  }

  fetchStory = () => {
    const app = this
    const {id} = this.props.match.params
    fetch(`https://hacker-news.firebaseio.com/v0/item/${id}.json?print=pretty`)
         .then(response => response.json())
         .then(result => {
           app.setState({story: result})
           app.fetchComments()
         })
         .catch(e => this.setState({error: e}))
  }

  fetchComments = () => {
    const app = this
    const {story} = this.state
    story.kids.forEach(id => {
      fetch(`https://hacker-news.firebaseio.com/v0/item/${id}.json?print=pretty`)
           .then(response => response.json())
           .then(result => {
             app.setState( prevState => ({comments:[...prevState.comments, result]}))
           })
           .catch(e => this.setState({error: e}))
    })
  }

  componentDidMount() {
    this.fetchStory()
  }
  render() {
    const { story, comments, error } = this.state
    if (error) {
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
            <li>Detail Story</li>
          </ul>
          <div className="table">
              <div className="table-row" key={ story.id}>
                <span style={{ width: '40%'}}>
                  <h3>{ story.title}</h3>
                  <h4>{ story.by}</h4>
                  <a href={story.url} target="_blank">Visit Story</a>
                </span>
              </div>
          </div>
          <h4>Comments</h4>
          <CommentList comments={comments}></CommentList>
        </div>
      )
    }
  }
}
export default ArticleDetail
