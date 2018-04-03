import React, { Component } from 'react';
import Axios from 'axios';
import { Link } from 'react-router-dom';

export default class Home extends Component {
  constructor () {
    super()
    this.state = {
      gifData: []
    }
  }

  componentDidMount () {
    let self = this
    Axios({
      method: 'get',
      url: 'https://api.giphy.com/v1/gifs/trending?api_key=gJ0CGlHLOziXQdicVmhlBCZkEy7mhDAs&limit=20&rating=G'
      })
        .then(({data}) => {
          self.setState({
            gifData: data.data
          })
        })
  }

  render() {
    console.log(this.state.gifData)
    return (
      <div className="container py-4">
        <div className="list-group">
            {
            this.state.gifData.map(gif => <ol><button className="list-group-item list-group-item-action" key={ gif.id }><Link to={`/${gif.id}`}> { gif.title } </Link></button></ol> ) 
            }
        </div>
      </div>
    )
  }
};
