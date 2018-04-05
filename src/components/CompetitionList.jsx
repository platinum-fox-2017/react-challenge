import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import {
  getCompetitionList
} from '../redux/action'

class CompetitionList extends Component {
  componentDidMount () {
    this.props.getCompList()
  }

  render() {
    if (this.props.loading) {
      return (
        <h1>fetching data..</h1>
      );
    } else if (this.props.error) {
      return (
        <h1>error fetching the data</h1>
      );
    } else {
      return (
        <div className="container">
          <h1>{this.props.message}</h1>
          <table className="table table-bordered">
            <thead>
              <tr>
                <th className="text-center">League Name</th>
                <th className="text-center">Number of Teams</th>
                <th className="text-center">Played Matchdays</th>           
                <th className="text-center">Action</th>           
              </tr>
            </thead>
            <tbody>
              {this.props.competitionList.map(competition => {
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
}


const mapStateToProps = (state) => {
  return {
    message: state.message,
    competitionList: state.competitionList,
    loading: state.loading_data,
    error: state.error_data
  }
}

const mapDispatchProps = (dispatch) => ({
  getCompList: () => dispatch(getCompetitionList()),
})

export default connect(mapStateToProps, mapDispatchProps)(CompetitionList)
