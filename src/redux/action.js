import {
  GET_COMPETITION_LIST,
  GET_LEAGUE_TABLE,
  GET_DETAIL_CLUB,
  LOADING_DATA,
  ERROR_DATA
} from './actionTypes'

import axios from 'axios'

export const getCompetitionList = () => {
  return (dispatch) => {
    dispatch(loading_data())
    axios({
      method: `GET`,
      url: `http://api.football-data.org/v1/competitions/?season=2017`,
      headers: {
        "X-Auth-Token": `dd78cdc8e7c447598bb2874da0744086`
      }
    })
    .then(competitions => {
      dispatch(getCompetitionListSuccess(competitions.data))
    })
    .catch(err => {
      dispatch(error_data())
    })
  }
}

export function getLeagueTable (id) {
  return (dispatch) => {
    let idLeague = id
    dispatch(loading_data())
    axios({
      method: `GET`,
      url: `http://api.football-data.org/v1/competitions/${idLeague}/leagueTable`,
      headers: {
        "X-Auth-Token": `dd78cdc8e7c447598bb2874da0744086`
      }
    })
    .then(leagueTable => {
      dispatch(getLeagueTableSuccess(leagueTable.data.standing))
    })
    .catch(err => {
      dispatch(error_data())
    })
  }
}

export function getDetailClub (id) {
  return (dispatch) => {
    let teamsId = id
    dispatch(loading_data())
    axios({
      method: `GET`,
      url: `http://api.football-data.org/v1/teams/${teamsId}`,
      headers: {
        "X-Auth-Token": `dd78cdc8e7c447598bb2874da0744086`
      }
    })
    .then(team => {
      dispatch(getDetailClubSuccess(team.data))
    })
    .catch(err => {
      dispatch(error_data())
    })
  }
}

const getCompetitionListSuccess = (payload) => {
  return {
    type: GET_COMPETITION_LIST,
    payload:payload
  }
}

const getLeagueTableSuccess = (payload) => {
  return {
    type: GET_LEAGUE_TABLE,
    payload: payload
  }
}

const getDetailClubSuccess = (payload) => {
  return {
    type: GET_DETAIL_CLUB,
    payload:payload
  }
}

const loading_data = (payload) => {
  return {
    type: LOADING_DATA
  }
}

const error_data = (payload) => {
  return {
    type: ERROR_DATA
  }
}
