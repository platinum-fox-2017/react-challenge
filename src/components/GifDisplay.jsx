import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { getData } from '../redux/actions';
import { connect } from 'react-redux';

class GifDisplay extends Component {

  componentDidMount () {
    axios.get("https://api.giphy.com/v1/gifs/trending?api_key=gJ0CGlHLOziXQdicVmhlBCZkEy7mhDAs&limit=20&rating=G").then(({data}) => {
      this.props.getGifData(data.data)
      // console.log(this.props.gifData,'Homeeee')
    })
  }

  render() {
    const { match: { params } } = this.props
    const { gifData } = this.props
    const gifStyle = {
      position: "fixed",
      right: 0
    }
    return (
      <div className="container py-4">
        <div className="row">
          <div className="col-sm-6">
            <div className="list-group">
              {
              gifData.map((gif, index) => <ol><Link to={`/${gif.id}`}><button className="list-group-item list-group-item-action" key={ index }> { gif.title } </button></Link></ol> ) 
              }
            </div>
          </div>
          <div className="col-sm-6" style={gifStyle}>
            <img src={`https://media.giphy.com/media/${params.id}/giphy.gif`} width="300" height="auto" className="gif" alt="gif" />
            { this.props.gifData.length > 0 ?
              gifData.map((gif, index) => {
                if (gif.id === params.id) {
                  return <p key={index}> {gif.title} </p>
                }
              }) : <h1>Loading ....</h1>
            }
          </div>
        </div>
      </div>
    )
  }
};

const mapStateToProps = (state) => {
  return {
    gifData: state.data
  }
}

const mapDispatchToProps = (dispatch) => ({
  getGifData: (payload) => dispatch(getData(payload))
})

export default connect(mapStateToProps, mapDispatchToProps)(GifDisplay);
