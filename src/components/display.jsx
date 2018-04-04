import React, { Component } from 'react';
import gif from '../assets/images/Jake_wiggle.gif'
import { connect } from 'react-redux'
import getDataAction from '../redux/action'

class Display extends Component {
  constructor() {
    super()
    this.state = {
      singleImage: [],
      loading: true
    }
  }
  checkLoad (state) {
    this.setState(() => ({
      loading: state
    }))
  }
  render () {
    return (
      <div className='disp-body'>
        { this.state.loading ?
          <div>
            <img src={gif} alt="wiggledog" id='onload'/>
            <h1>Please wait while our page is loading</h1>
          </div>
          :
          <a href={ 'https://www.google.com/maps/search/?api=1&query='+  this.state.singleImage[0].location.latitude + ',' + this.state.singleImage[0].location.longitude } >
            <div className='grid'>
                <h3> click image to check out the place </h3>
                <div className="photo">
                  <img id='img' src={this.state.singleImage[0].images.standard_resolution.url} alt="" className="src"/>
                </div>
                <div className="photo-caption">
                  <h3>{ this.state.singleImage[0].caption.text }</h3>
                </div>
            </div>
          </a>
        }
      </div>
    )
  }
  componentDidMount () {
    this.checkLoad(true)
    let load = getDataAction().payload
    // this.props.getData()
    // let load = this.props
    for (let i = 0; i < load.length; i++) {
      if (load[i].caption.id === this.props.match.params.id) {
        this.setState(prevState => ({
          singleImage: [...prevState.singleImage, load[i]]
        }))
        this.checkLoad(false)
      }
    }
  }
};
const mapStateToProps = (state) => {
  return {
    payload: state.payload
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    getData: () => {
      dispatch(getDataAction())
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Display)