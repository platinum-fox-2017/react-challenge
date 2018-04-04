import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

class LeagueTable extends Component {
  constructor () {
    super()
    this.state = {
      leagueTable: []
    }
  }

  componentDidMount () {
    let idLeague = this.props.match.params.id
    axios({
      method: `GET`,
      url: `http://api.football-data.org/v1/competitions/${idLeague}/leagueTable`,
      headers: {
        "X-Auth-Token": `dd78cdc8e7c447598bb2874da0744086`
      }
    })
    .then(leagueTable => {
      console.log(leagueTable)
      this.setState(() => {
        return {
          leagueTable: leagueTable.data.standing
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
            <th className="text-center" style={{width:`10px`}}>Position</th>
            <th className="text-center" style={{width:`300px`}}>Team Name</th>
            <th className="text-center" style={{width:`10px`}}>Played Games</th>           
            <th className="text-center" style={{width:`10px`}}>Points</th>           
            <th className="text-center" style={{width:`10px`}}>Action</th>           
          </tr>
        </thead>
        <tbody>
          {this.state.leagueTable.map( table => {
            return (
              <tr key={table.position}>
                <td>{table.position}</td>
                <td>{table.teamName}</td>
                <td>{table.playedGames}</td>
                <td>{table.points}</td>
                <td>
                  <Link to={`/detail/${table._links.team.href.split('/').pop()}`}>
                    <button className="btn btn-primary">
                      Club Detail
                    </button>
                  </Link>
                </td>
              </tr>
            )
          })}
        </tbody>
      </table>
    </div>
    );
  }
}

export default LeagueTable;