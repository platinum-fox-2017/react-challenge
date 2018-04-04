import React, { Component } from 'react'
import { Link } from 'react-router-dom'

const API = 'AIzaSyAqeflTMkQmxDmlCAUlEILEBEmGeoz3Mco'
const channelID = 'UC29ju8bIPH5as8OGnQzwJyA'
const result = 4

// https://www.googleapis.com/youtube/v3/search?key=AIzaSyAqeflTMkQmxDmlCAUlEILEBEmGeoz3Mco&channelId=UC29ju8bIPH5as8OGnQzwJyA&part=snippet,id&order=date&maxResults=2

var finalURL = `https://www.googleapis.com/youtube/v3/search?key=${API}&channelId=${channelID}&part=snippet,id&order=date&maxResults=${result}`

export default class Youtube extends Component {
  constructor (props) {
    super(props)
    this.state = {
      resultYT: []
    }
  }
  
  componentDidMount = () => {
    fetch(finalURL)
      .then(response => response.json())
      .then(responseJson => {
        // console.log(responseJson);
        const resultYT = responseJson.items
        this.setState({resultYT: resultYT})
      })
      .catch(error => {
        console.error(error)
      })
  }

  render() {
    const ytLink = "https://www.youtube.com/embed/"
    return (
      <div>
        {
          this.state.resultYT.map((item, i) => {
            var frame = <div className="col-xs-6" key={i}><Link to={item.id.videoId}><h3>{item.snippet.title}</h3></Link><p>Channel : {item.snippet.channelTitle}</p>
            <iframe width="280" height="160" src={ytLink+item.id.videoId} frameBorder="0" allow="autoplay; encrypted-media" allowFullScreen title="tutorial"></iframe>
            </div>
            return frame
          })
        }

        {this.frame}
      </div>
    )
  }
}
