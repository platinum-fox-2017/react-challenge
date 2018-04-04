import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { getData } from '../redux/actions';
import { connect } from 'react-redux';

class Home extends Component {

  componentDidMount () {
    axios.get("https://api.giphy.com/v1/gifs/trending?api_key=gJ0CGlHLOziXQdicVmhlBCZkEy7mhDAs&limit=20&rating=G").then(({data}) => {
      this.props.getGifData(data.data)
      // console.log(this.props.gifData,'Homeeee')
    })
  }

  render () {
    return (
      <div className="container py-4">
        <div className="row">
          <div className="col-sm-6">
            <div className="list-group">
              { this.props.gifData.length > 0 ?
              this.props.gifData.map((gif, index) => <ol><Link to={`/${gif.id}`}><button className="list-group-item list-group-item-action" key={ index }> { gif.title } </button></Link></ol> )
              : <h1>Loading ....</h1>
              }
            </div>
          </div>
        </div>
      </div>
    )
  }

}
const mapStateToProps = (state) => {
  return {
    gifData: state.data
  }
}

const mapDispatchToProps = (dispatch) => ({
  getGifData: (payload) => dispatch(getData(payload))
})

export default connect(mapStateToProps, mapDispatchToProps)(Home);


