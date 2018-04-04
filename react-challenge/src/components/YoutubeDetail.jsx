import React, { Component } from 'react'


export default class YoutubeDetail extends Component {
  constructor () {
    super()
    this.state = {
      videoData: []
    }
  }
  
  componentDidMount = () => {
    const API = 'AIzaSyAqeflTMkQmxDmlCAUlEILEBEmGeoz3Mco'
    const videoID = this.props.match.params.id
    var finalUrl = `https://www.googleapis.com/youtube/v3/videos?key=${API}&part=snippet&id=${videoID}`
    
    fetch(finalUrl)
      .then(res => res.json())
      .then(data => {
        console.log('data ',data.items);
        this.setState({videoData: data.items})
      })
      .catch(err => console.error(err))
  }
  
  render() {
    const ytLink = "https://www.youtube.com/embed/"
    return (
      <div className="container">
        <div className="row">
        {
          this.state.videoData.map((data, i) => {
            // console.log("yt detail, ",data);
            // console.log('==== ',this.props.match.params.id)
            var frame = <div className="col-xs-12" key={i}><h3>{data.snippet.title}</h3><p>Channel : {data.snippet.channelTitle}</p>
            <iframe width="560" height="320" src={ytLink+this.props.match.params.id} frameBorder="0" allow="autoplay; encrypted-media" allowFullScreen></iframe>
            <p>{data.snippet.description}</p>
            </div>
            return frame
          })
        }
        {this.frame}
        </div>
      </div>
    )
  }
}
