import React from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux';
import { loadTeam,loadNewTeam } from '../store/teams/teams.action'
import Search from './Search'


class ListTeam extends React.Component {
  componentDidMount() {
    this.props.loadTeam()
  }

  submitInput = (value) => {
    const filterTeam = this.props.team.data.filter((team, index) => {
      return team.name.toLowerCase().indexOf(value.toLowerCase()) !== -1
    })
    this.props.loadNewTeam(filterTeam)
  }

  render () {
    return (
      <div className="container">
        <Search
          searchit={this.submitInput}></Search>
        <h4>Dota Teams</h4>
        {
          this.props.team.data &&
          (this.props.team.data.length === 0) ? (<div>
            <img src="http://media.lastgif.com/gifs/21715.gif" alt="team" width="500" height="250"/>
            <h1>Loading..</h1>
          </div>) :
          <table className="table table-striped table-dark">
            <thead>
              <tr>
                <th scope="col">Rank</th>
                <th scope="col">Icon</th>
                <th scope="col">Name</th>
                <th scope="col">Wins</th>
                <th scope="col">Losses</th>
                <th scope="col">Others</th>
              </tr>
            </thead>
            <tbody>
              {
                this.props.team.data &&
                this.props.team.data.map((data, i) => {
                  return (
                    <tr key={i}>
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
                        <Link to={`/player/${data.team_id}`} className="btn btn-outline-light">
                          Rosters
                        </Link>
                      </td>
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
  team: state.team
})

const mapDispatchToProps = (dispatch) => bindActionCreators({
  loadTeam,
  loadNewTeam
}, dispatch)


export default connect(mapStateToProps,mapDispatchToProps)(ListTeam);
