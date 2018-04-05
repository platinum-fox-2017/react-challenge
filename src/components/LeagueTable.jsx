import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { getLeagueTable } from '../redux/leaguetable/leaguetable.action';
import { bindActionCreators } from 'redux';
import { DotLoader } from 'react-spinners';
import { connect } from 'react-redux';

class LeagueTable extends Component {
  componentDidMount () {
    let idLeague = this.props.match.params.id
    this.props.getLeagueTable(idLeague)
  }

  render() {
    if (this.props.loading) {
      return (
        <div>
          <h1>fetching data..</h1>
          <div className='sweet-loading'  style={{ 'marginLeft': '850px'}}>
          <DotLoader color={'#123abc'}/>
          </div>
        </div>
      )
    } else if (this.props.error) {
      return (
        <h1>error fetching the data</h1>
      )
    } else {
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
              {this.props.leagueTable.map( table => {
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
}

const mapStateToProps = (state) => {
  return {
    leagueTable: state.leagueTableReducer.leagueTable,
    loading: state.leagueTableReducer.loading_data,
    error: state.leagueTableReducer.error_data
  }
}

const mapDispatchToProps = (dispatch) => bindActionCreators({
  getLeagueTable
}, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(LeagueTable);