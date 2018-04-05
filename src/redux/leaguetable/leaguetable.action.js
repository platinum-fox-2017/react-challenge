import {
  GET_LEAGUE_TABLE,
  LOADING_DATA,
  ERROR_DATA
} from './leaguetable.actionTypes'

import axios from 'axios'

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

const getLeagueTableSuccess = (payload) => {
  return {
    type: GET_LEAGUE_TABLE,
    payload: payload
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
