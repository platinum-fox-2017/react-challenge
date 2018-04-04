import React from 'react'
import axios from 'axios'
import { connect } from 'react-redux'
import { insertPlayer } from '../redux/Action'



class Player extends React.Component {

  componentDidMount() {
    const id = this.props.match.params.id_team
    console.log(id);
    axios({
      method: 'get',
      url: `https://api.opendota.com/api/teams/${id}/players`
    }).then(({ data }) => {
      this.props.insertPlayer(data)
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
            { this.props.data_player &&
              this.props.data_player.map((data, i) => {
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

const mapStateToProps = (state) => {
  return {
    data_player: state.data_player
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    insertPlayer: (payload) => {
      dispatch(insertPlayer(payload))
    }
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(Player);
