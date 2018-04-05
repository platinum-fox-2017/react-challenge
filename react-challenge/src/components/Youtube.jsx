import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { fetchVideos } from '../actions/ytAction'


class Youtube extends Component {
  componentWillMount = () => {
    this.props.fetchVideos()
  }

  render() {
    const ytLink = "https://www.youtube.com/embed/"
    return (
      <div>
        {
          this.props.resultYT.map((item, i) => {
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

const mapStateToProps = state => (
  // console.log("@youtube/ mapStateToProps/ state ", state),
  { 
  resultYT: state.resultYT.data
})

const mapDispatchToProps = dispatch => bindActionCreators({
  fetchVideos
}, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(Youtube)