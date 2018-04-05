import React, { Component } from 'react';
import { Link } from "react-router-dom";
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux';
import { loadHouses } from '../store/houses/houses.action'

class HouseList extends Component {

  componentDidMount () {
    this.props.loadHouses()
  }

  render() {
    if (this.props.houses.loading) {
      return (
        <h1>Loading.... Yang Sabar Yaaa</h1>
      )
    }
    else if(this.props.houses.error) {
      return (
        <div className="container">
          <div className="alert alert-danger alert-dismissible fade show" role="alert">
            Something Went Wrong
            <button type="button" className="close" data-dismiss="alert" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
        </div>
      )
    }else{
      return (
        <div className="col-lg-6 offset-lg-3">
          <h1>List of House Game Of Thrones</h1>
            <div className="list-group">
              {
                this.props.houses.datas.map(house =>
                  <Link to={`houses/${house._id}`} className="list-group-item list-group-item-action">{house.name}</Link>
                )
              }
            </div>
        </div>
      )
    }
  }
}

const mapStateToProps = (state) => {
  return {
    houses: state.houses,
  }
}

const mapDispatchToProps = dispatch => bindActionCreators({
  loadHouses
}, dispatch)


export default connect(mapStateToProps, mapDispatchToProps)(HouseList);