import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { bindActionCreators } from 'redux';
import { loadPlayer } from '../store/players/players.action'

class ListPlayer extends React.Component {

  componentDidMount() {
    const id = this.props.match.params.id_team
    this.props.loadPlayer(id)
  }

  render () {
    return  (
      <div className="container">
        <h4>Rosters</h4>
        {
          this.props.player.data &&
          (this.props.player.data.length === 0) ? (<div>
            <img src="http://media.lastgif.com/gifs/21715.gif" alt="team" width="500" height="250"/>
            <h1>Loading..</h1>
          </div>) :
          <table className="table">
            <caption>
              <Link to={'/team'}>
                Back
              </Link>
            </caption>
            <thead>
              <tr>
                <th scope="col">Name</th>
                <th scope="col">Wins</th>
                <th scope="col">Games Played</th>
              </tr>
            </thead>
            <tbody>
              {
                this.props.player.data &&
                this.props.player.data
                .filter(data => data.is_current_team_member === true)
                .map((datas, i) => {
                  return (
                    <tr key={i}>
                      <td>{ datas.name }</td>
                      <td>{ datas.wins }</td>
                      <td>{ datas.games_played }</td>
                    </tr>
                  )
                })
              }
            </tbody>
          </table>
        }
      </div>
    )
  }
}
const mapStateToProps = (state) => ({
  player: state.player
})

const mapDispatchToProps = (dispatch) => bindActionCreators({
  loadPlayer
}, dispatch)


export default connect(mapStateToProps,mapDispatchToProps)(ListPlayer);

// map((data, i) => {
//   if (data.is_current_team_member) {
//   }
