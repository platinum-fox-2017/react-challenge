import { Animated } from 'react-animated-css'
import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import gif from '../assets/images/Jake_wiggle.gif'
import getDataAction from '../redux/action'

class Feed extends Component {
  
  render() {
    const feeds = this.props.payload
    if (this.props.loading) {
      return (
      <Animated animationIn="fadeIn" animationOut="fadeOut" isVisible={true}>
        <div className="onLoad" style= {{ order: 2 }}>
          <img style= {{ }} src={gif} alt="wiggledog" id='onload'/>
          <h1>Please wait while our page is loading</h1>
        </div>
      </Animated>
      )
    } else {
      return (
      <Animated animationIn="fadeIn" animationOut="fadeOut" isVisible={true}>
        <div>
          <div className="body">
            { 
              feeds.map((feed) => 
                <div key={feed.caption.id} className='box'>
                <Link to={`/images/${feed.caption.id}`}>
                  <img src={feed.images.standard_resolution.url} alt="gambar" />
                </Link>
                </div>
              )
            }
          </div>
        </div>
      </Animated>
      )
    }
  }
  componentDidMount(){
    this.props.getDataAction()
  }
};

const mapStateToProps = (state) => {
  console.log(state)
  return {
    payload: state.payload,
    loading: state.loading,
    err: state.err
  }
}
const mapDispatchToProps = (dispatch) => bindActionCreators({
  getDataAction
}, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(Feed);
