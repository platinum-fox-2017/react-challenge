import React from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { insertData } from '../redux/Action'
import { searchTeam } from '../redux/Action'
import Search from './Search'
import axios from 'axios'


class ListTeam extends React.Component {
  componentDidMount() {
    axios({
      method: 'get',
      url: 'https://api.opendota.com/api/teams'
    }).then(({ data }) => {
      const newData = data.slice(0, 30)
      this.props.insertData(newData)
    })
  }

  submitInput = (value) => {
    const filterTeam = this.props.data_team.filter((team, index) => {
      if (team.name.toLowerCase().indexOf(value.toLowerCase()) !== -1) {
        return team
      }
    })
    console.log(filterTeam)
    this.props.insertData(filterTeam)
  }

  render () {
    return (
      <div className="container">
        <Search
          searchit={this.submitInput}></Search>
        <h1>Dota 2 Pro Teams</h1>
        { this.props.data_team &&
          (this.props.data_team.length === 0) ? (<div>
            <img src="http://media.lastgif.com/gifs/21715.gif" alt="team" width="500" height="250"/>
            <h1>please wait..</h1>
          </div>) :
          <table className="table table-striped table-dark">
            <thead>
              <tr>
                <th scope="col">#</th>
                <th scope="col">Icon</th>
                <th scope="col">Name</th>
                <th scope="col">Wins</th>
                <th scope="col">Losses</th>
                <th scope="col">Others</th>
              </tr>
            </thead>
            <tbody>
              { this.props.data_team &&
                this.props.data_team.map((data, i) => {
                  return (
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

const mapStateToProps = (state) => {
  return {
    data_team: state.data_team
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    insertData: (payload) => {
      dispatch(insertData(payload))
    },
    filterData: (payload) => {
      dispatch(searchTeam(payload))
    }

  }
}

export default connect(mapStateToProps,mapDispatchToProps)(ListTeam);
