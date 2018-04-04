import React, { Component } from 'react';
import axios from 'axios'
import { Link } from 'react-router-dom'

class CompetitionList extends Component {
  constructor () {
    super()
    this.state = {
      competitionList: []
    }
  }

  componentDidMount () {
    axios({
      method: `GET`,
      url: `http://api.football-data.org/v1/competitions/?season=2017`,
      headers: {
        "X-Auth-Token": `dd78cdc8e7c447598bb2874da0744086`
      }
    })
    .then(competitions => {
      console.log(competitions.data)
      this.setState(() => {
        return {
          competitionList: competitions.data
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
          <table className="table table-bordered">
            <thead>
              <tr>
                <th className="text-center">Competition List</th>
                <th className="text-center">Number of Teams</th>
                <th className="text-center">Played Matchdays</th>           
                <th className="text-center">Action</th>           
              </tr>
            </thead>
            <tbody>
              {this.state.competitionList.map( competition => {
                return (
                  <tr key={competition.id}>
                    <td>{competition.caption}</td>
                    <td>{competition.numberOfTeams}</td>
                    <td>{competition.currentMatchday}</td>
                    <td><Link to={`/table/${competition.id}`}><button className="btn btn-primary">View Table</button></Link></td>
                  </tr>
                )
              })}
            </tbody>
          </table>
        </div>
    );
  }
}

export default CompetitionList;