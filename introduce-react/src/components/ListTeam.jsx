import React from 'react'
import axios from 'axios';
import { Link } from 'react-router-dom'


class ListTeam extends React.Component {
  constructor() {
    super()
    this.state = {
      data_team: []
    }
  }

  componentDidMount() {
    axios({
      method: 'get',
      url: 'https://api.opendota.com/api/teams'
    }).then(({ data }) => {
      const newData = data.slice(0, 30)
      // console.log(newData);
      this.setState({
        data_team: newData
      })
    })
  }

  render () {
    return (
      <div className="container">
        <h1>Dota 2 Pro Teams</h1>
          <table className="table table-striped table-dark">
            <thead>
              <tr>
                <th scope="col">#</th>
                <th scope="col">Icon</th>
                <th scope="col">Name</th>
                <th scope="col">Wins</th>
                <th scope="col">Losses</th>
                <th scope="col">Action</th>
              </tr>
            </thead>
            <tbody>
              {
                this.state.data_team.map((data,i) => {
                  return(
                    <tr key={data.name}>
                      <th>{ i+1 }</th>
                      <td>
                        <img height="42" alt="img" src={ data.logo_url }/>
                      </td>
                      <td>
                        { data.name }
                      </td>
                      <td>{ data.wins }</td>
                      <td>{ data.losses }</td>
                      <td>
                        <button type="button" class="btn btn-outline-primary">
                          <Link to={`/player/${data.team_id}`}>
                            Rosters
                          </Link>
                        </button>
                      </td>
                    </tr>
                  )
                })
              }

            </tbody>
          </table>
      </div>
    )
  }
}

export default ListTeam;
