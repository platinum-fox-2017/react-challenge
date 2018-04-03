import React from 'react'
import axios from 'axios';

class Player extends React.Component {
  constructor() {
    super()
    this.state = {
      data_player: []
    }
  }

  componentDidMount() {
    const id = this.props.match.params.id_team
    console.log(id);
    axios({
      method: 'get',
      url: `https://api.opendota.com/api/teams/${id}/players`
    }).then(({ data }) => {
      console.log(data);
      this.setState({
        data_player: data
      })
    })
  }

  render () {
    return  (
      <div className="container">
        <h1>Rooster of the Team</h1>
          <table className="table">
            <caption>List of Player</caption>
            <thead>
              <tr>
                <th scope="col">Name</th>
                <th scope="col">Wins</th>
                <th scope="col">Games Played</th>
              </tr>
            </thead>
            <tbody>
              {
                this.state.data_player.map((data, i) => {
                  if (data.is_current_team_member) {
                    return (
                      <tr key={data.name}>
                        <td>{ data.name }</td>
                        <td>{ data.wins }</td>
                        <td>{ data.games_played }</td>
                      </tr>
                    )
                  }
                })
              }

            </tbody>
          </table>
      </div>
    )
  }
}

export default Player;
