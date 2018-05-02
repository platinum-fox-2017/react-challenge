import React, { Component } from 'react';
import gif from '../assets/images/Jake_wiggle.gif'
import { connect } from 'react-redux'
import getDataAction from '../redux/action'
import { bindActionCreators } from 'redux'
import { Animated } from 'react-animated-css'

class Display extends Component {
  render () {
    if (this.props.payload.length > 0) {
      return this.props.payload
        .filter(photo => photo.caption.id === this.props.match.params.id)
        .map(photo => {
          return (
          <Animated animationIn="fadeIn" animationOut="fadeOut" isVisible={true}>
            <div className='disp-body'>
              { 
                <a href={ `https://www.google.com/maps/search/?api=1&query=${photo.location.latitude},${photo.location.longitude}` } >
                  <div className='grid'>
                      <h3> click image to check out the place </h3>
                      <div className="photo">
                        <img id='img' src={photo.images.standard_resolution.url} alt="" className="src"/>
                      </div>
                      <div className="photo-caption">
                        <h3>{photo.caption.text }</h3>
                      </div>
                  </div>
                </a>
              }
            </div>
          </Animated>
          ) 
        })
    } else {
      return (
        <div>
          <img src={gif} alt="wiggledog" id='onload'/>
          <h1>Please wait while our page is loading</h1>
        </div>
      )
    }
  }
  componentWillMount () {
    this.props.getDataAction()
  }
};
const mapStateToProps = (state) => {
  console.log(state)
  return {
    payload: state.photo.payload,
    loading: state.photo.loading,
    err: state.photo.err
  }
}

const mapDispatchToProps = (dispatch) => bindActionCreators({
  getDataAction
}, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(Display)