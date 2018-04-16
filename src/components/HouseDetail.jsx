import React, { Component } from 'react';
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux';
import { loadHouse } from '../store/house/house.action'

class HouseDetail extends Component {

  componentDidMount () {
    const houseId = this.props.match.params.houseId
    this.props.loadHouse(houseId)
  }

  render() {
    if (this.props.house.loading) {
      return (
        <h1>Sabar.....</h1>
      )
    }else if(this.props.house.error){
      return (
        <div className="alert alert-danger alert-dismissible fade show" role="alert">
          Something Went Wrong Jon?
          <button type="button" className="close" data-dismiss="alert" aria-label="Close">
            <span aria-hidden="true">&times;</span>
          </button>
        </div>
      )
    }
    else{
      return (
        <div className="col-md-6 offset-md-3">
          <ul className="list-group">
            <li className="list-group-item">ID - {this.props.house.data._id}</li>
            <li className="list-group-item">NAME - {this.props.house.data.name}</li>
            <li className="list-group-item">createdAt - {this.props.house.data.createdAt}</li>
            <li className="list-group-item">updatedAt - {this.props.house.data.updatedAt}</li>
          </ul>
        </div>
      )
    }
  }
}

const mapStateToProps = (state) => {
  return {
    house: state.house,
  }
}

const mapDispatchToProps = dispatch => bindActionCreators({
  loadHouse
}, dispatch)


export default connect(mapStateToProps, mapDispatchToProps)(HouseDetail)