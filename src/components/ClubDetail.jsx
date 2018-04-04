import React, { Component } from 'react';
import axios from 'axios';

class ClubDetail extends Component {
  constructor () {
    super()
    this.state = {
      team: {}
    }
  }
    
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
      console.log(team.data)
      this.setState(() => {
        return {
          team: team.data
        }
      })
    })
    .catch(err => {
      console.log(err)
    })
  }

  render() {
    return (
      <div className="container">
        <div className="col-md-8 col-md-offset-2">
          <h1>{this.state.team.name}</h1>
          <img className="img-responsive" width="400px" style={{margin:'0 auto'}}src={this.state.team.crestUrl} alt={`${this.state.team.name} logo`}/>
        </div>
      </div>
    );
  }
}

export default ClubDetail;