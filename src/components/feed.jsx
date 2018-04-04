import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import getDataAction from '../redux/action'

class Feed extends Component {
  
  render() {
    const feeds = this.props.payload
    return (
      <div>
        <div className="body">
          { feeds &&
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
    )
  }
  componentDidMount(){
    this.props.getData()
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
      console.log(getDataAction())
      dispatch(getDataAction())
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Feed);
