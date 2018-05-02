import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { bindActionCreators } from 'redux';
import { getGifData } from '../../store/gifs/gifActions';
import { connect } from 'react-redux';
import Navbar from './GifNavbar'

class GifHome extends Component {

  componentDidMount () {
    this.props.getGifData()
  }

  render () {
    return (
      <div>
        <Navbar/>
        <div className="container py-4">
          <div className="row">
            <div className="col-sm-6">
              <div className="list-group">
                { 
                this.props.gifData.map((gif, index) => <ol key={ index }><Link to={`/gif/${gif.id}`}><button className="list-group-item list-group-item-action"> { gif.title } </button></Link></ol> )
                }
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }

}
const mapStateToProps = (state) => {
  return {
    gifData: state.gifs.dataGif
  }
}

const mapDispatchToProps = (dispatch) => bindActionCreators({
  getGifData
}, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(GifHome);


