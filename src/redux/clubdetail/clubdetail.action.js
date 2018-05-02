import {
  GET_DETAIL_CLUB,
  LOADING_DATA,
  ERROR_DATA
} from './clubdetail.actionTypes'

import axios from 'axios'

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
