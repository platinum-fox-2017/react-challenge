import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Timeline } from 'antd';
import axios from 'axios';

export default class componentName extends Component {
  constructor() {
    super()
    this.state = {
      loading: 'true',
      repos: []
    }
  }

  componentDidMount() {
    this.getRepos((res) => {
      // console.log(res)
      this.setState({
        loading: 'false',
        repos: res
      })
    })
  }

  getRepos = (callback) => {
    axios.get('https://api.github.com/users/eksant/repos?sort=created&direction=asc')
    .then(({data}) => {
      // console.log(data)
      callback(data)
    })
    .catch(err => {
      console.log(err.message)
      // this.openNotificationWithIcon('warning')
    })
  }

  render() {
    const { loading } = this.state;
    // const openNotificationWithIcon = (type) => {
    //   notification[type]({
    //     message: 'Notification',
    //     description: 'API rate limit exceeded for 139.228.111.120. (But here\'s the good news: Authenticated requests get a higher rate limit. Check out the documentation for more details.',
    //   });
    // };

    return (
      <div className="pt-card" loading={loading}>
        <h3>Timeline Respository</h3>

        <Timeline>
          {this.state.repos.map((repo, i) => (            
            <Timeline.Item key={i}>
              <p><strong>{repo.name}</strong> ({repo.created_at})</p>
              <p>{repo.description}<br/><small>GitLink: <Link to={repo.html_url} target="_blank">{repo.html_url}</Link></small></p>
              <Link to={`/repo/${repo.name}`} className="pt-button pt-small pt-intent-success">Detail <span className="pt-icon-standard pt-icon-arrow-right pt-align-right"></span></Link>
            </Timeline.Item>          
          ))}
        </Timeline>
      </div>
    )
  }
};
