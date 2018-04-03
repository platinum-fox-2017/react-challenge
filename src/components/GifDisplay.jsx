import React, { Component } from 'react';
import Axios from 'axios';

export default class GifDisplay extends Component {
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
      url: 'https://api.giphy.com/v1/gifs/trending?api_key=gJ0CGlHLOziXQdicVmhlBCZkEy7mhDAs&limit=10&rating=R'
      })
        .then(({data}) => {
          self.setState({
            gifData: data.data
          })
        })
  }

  render() {
    const { match: { params } } = this.props
    return (
      <div className="container py-4">
        <img src={`https://media.giphy.com/media/${params.id}/giphy.gif`} className="gif" alt="gif" />
        {
          this.state.gifData.map(gif => {
            if (gif.id === params.id) {
              return <p key={gif.id}> {gif.title} </p>
            }
          })
        }
      </div>
    )
  }
};
