import React, { Component } from 'react';
import { getDetailClub } from '../redux/clubdetail/clubdetail.action';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

class ClubDetail extends Component {

  componentDidMount () {
    let teamsId = this.props.match.params.idteam
    this.props.getDetailClub(teamsId)
  }

  render() {
    if (this.props.loading) {
      return (
        <h1>fetching data..</h1>
      )
    } else if (this.props.error) {
      return (
        <h1>error fetching the data</h1>
      )
    } else {
      return (
        <div className="container">
          <div className="col-md-8 col-md-offset-2">
            <h1>{this.props.team.name}</h1>
            <img className="img-responsive" width="400px" style={{margin:'0 auto'}}src={this.props.team.crestUrl} alt={`${this.props.team.name} logo`}/>
          </div>
        </div>
      );
    }

  }
}

const mapStateToProps = (state) => {
  return {
    team: state.detailClubReducer.detailClub,
    loading: state.detailClubReducer.loading_data,
    error: state.detailClubReducer.error_data
  }
}

const mapDispatchToProps = (dispatch) => bindActionCreators({
  getDetailClub
}, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(ClubDetail);