import React, { Component } from 'react';
import axios from 'axios';
import { getDetailClub } from '../redux/action'
import { connect } from 'react-redux'

class ClubDetail extends Component {

  componentDidMount () {
    let teamsId = this.props.match.params.idteam
    axios({
      method: `GET`,
      url: `http://api.football-data.org/v1/teams/${teamsId}`,
      headers: {
        "X-Auth-Token": `dd78cdc8e7c447598bb2874da0744086`
      }
    })
    .then(team => {
      this.props.getClubDetail(team.data)
    })
    .catch(err => {
      console.log(err)
    })
  }

  render() {
    return (
      <div className="container">
        <div className="col-md-8 col-md-offset-2">
          <h1>{this.props.team.name}</h1>
          <img className="img-responsive" width="400px" style={{margin:'0 auto'}}src={this.props.team.crestUrl} alt={`${this.props.team.name} logo`}/>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    team: state.detailClub
  }
}

const mapDispatchToProps = (dispatch) => ({
  getClubDetail: (payload) => dispatch(getDetailClub(payload))
})

export default connect(mapStateToProps, mapDispatchToProps)(ClubDetail);