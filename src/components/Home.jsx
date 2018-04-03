import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Timeline } from 'antd';
import axios from 'axios';

export default class componentName extends Component {
  constructor() {
    super()
    this.state = {
      repos: []
    }
  }

  getRepos = () => {
    axios.get('https://api.github.com/users/eksant/repos?sort=created&direction=asc')
    .then(({data}) => {
      // console.log(data)
      this.setState({ repos: data })
    })
    .catch(err => {
      console.log(err)
    })
  }

  componentDidMount() {
    this.getRepos()
  }

  render() {
    return (
      <div className="pt-card">
        <h3>Timeline Respository</h3>
        <Timeline>
          {this.state.repos.map((repo, i) => (            
            <Timeline.Item key={i}>
              <p><strong>{repo.name}</strong> ({repo.created_at})</p>
              <p>{repo.description}<br/><small>GitLink: <Link to={repo.html_url} target="_blank">{repo.html_url}</Link></small></p>
              <Link to={`/repo/${repo.name}`} className="pt-button pt-small pt-intent-success">Detail {repo.full_name} <span className="pt-icon-standard pt-icon-arrow-right pt-align-right"></span></Link>
            </Timeline.Item>          
          ))}
        </Timeline>
      </div>
    )
  }
};
