import {
  GET_COMPETITION_LIST,
  LOADING_DATA,
  ERROR_DATA
} from './competitionlist.actionTypes'

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

const getCompetitionListSuccess = (payload) => {
  return {
    type: GET_COMPETITION_LIST,
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
