import React, { Component } from 'react';
import { connect } from 'react-redux'

class HouseDetail extends Component {

  render() {
    return (
      <div className="col-md-6 offset-md-3">
        <ul className="list-group">
        </ul>
      </div>
    )
  }
}

export default connect()(HouseDetail)