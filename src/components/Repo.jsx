import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { Card, Icon, Avatar } from 'antd';
const { Meta } = Card;

export default class componentName extends Component {
  constructor() {
    super()
    this.state = {
      repo: []
    }
  }

  getDetailRepo = () => {
    axios.get(`https://api.github.com/repos/eksant/${this.props.match.params.name}`)
    .then(({data}) => {
      // console.log(data)
      this.setState({ repo: data })
    })
    .catch(err => {
      console.log(err)
    })
  }

  componentDidMount() {
    this.getDetailRepo()
  }

  render() {
    return (
      <Card
        style={{ width: "100%" }}
        cover={<img alt="example" height="300px" src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png" />}
        actions={[<Link to="/"><Icon type="home" /></Link>, <Icon type="edit" />, <Icon type="delete" />]}
      >
        <Meta
          avatar={<Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />}
          title={this.state.repo.name}
          description={this.state.repo.description}
        />
      </Card>
    )
  }
}
