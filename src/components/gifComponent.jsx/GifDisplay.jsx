import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { bindActionCreators } from 'redux';
import { getGifData } from '../../store/gifs/gifActions';
import { connect } from 'react-redux';
import Navbar from './GifNavbar'

class GifDisplay extends Component {

  componentDidMount () {
    this.props.getGifData()
  }

  render() {
    const { match: { params } } = this.props
    const { gifData, loading, error } = this.props
    const gifStyle = {
      position: "fixed",
      right: 0
    }
    if ( loading ) {
      return <h1>Loading .... </h1>
    } else if ( error ) {
      return <h1>Error .... </h1>
    } else {
      return (
        <div>
          <Navbar/>
          <div className="container py-4">
            <div className="row">
              <div className="col-sm-6">
                <div className="list-group">
                  {
                    gifData
                    .map((gif, index) => <ol key={ index }><Link to={`/gif/${gif.id}`}><button className="list-group-item list-group-item-action"> { gif.title } </button></Link></ol> ) 
                  }
                </div>
              </div>
              <div className="col-sm-6" style={gifStyle}>
                <img src={`https://media.giphy.com/media/${params.id}/giphy.gif`} width="300" height="auto" className="gif" alt="gif" />
                { 
                  gifData
                  .filter(gif => gif.id === params.id)
                  .map((gifs, index) => {
                    return <p key={index}> {gifs.title} </p>
                  })
                }
              </div>
            </div>
          </div>
        </div>
      )
    }
  }
};

const mapStateToProps = (state) => {
  return {
    gifData: state.gifs.dataGif,
    loading: state.gifs.loading,
    error: state.gifs.error
  }
}

const mapDispatchToProps = (dispatch) => bindActionCreators({
  getGifData
}, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(GifDisplay);
