import React, { Component } from 'react';
import axios from 'axios'
import gif from '../assets/images/Jake_wiggle.gif'

export default class Display extends Component {
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
  componentDidMount (){
    this.checkLoad(true)
    axios.get('https://api.instagram.com/v1/users/self/media/recent/?access_token=3441883492.ad56b48.5133663fa0024e4586e34a511c33638b')
      .then(result => {
        for (let i = 0; i < result.data.data.length; i++) {
          if (result.data.data[i].caption.id === this.props.match.params.id) {
            this.setState(prevState => ({
              singleImage: [...prevState.singleImage, result.data.data[i]]
            }))
            this.checkLoad(false)
          }
        }
      })
      .catch(err => {
        console.log(err)
      })
  }
};
