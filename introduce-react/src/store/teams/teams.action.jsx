import {
  LOAD_TEAMS_SUCCESS,
  LOAD_TEAMS_ERROR,
  LOAD_TEAMS_LOADING,
  LOAD_NEWTEAMS_SUCCESS
} from './teams.actionTypes';
import axios from 'axios'

export const loadTeam = (payload) => {
  return dispatch => {
    dispatch(loadTeamsLoading())
    axios({
      method: 'get',
      url: 'https://api.opendota.com/api/teams'
    }).then(({ data }) => {
      const newData = data.slice(0, 30)
      dispatch(loadTeamsSuccess(newData))
    }).catch(err => dispatch(loadTeamsError()))
  }
}

export const loadNewTeam = (payload) => {
  return dispatch => {
    dispatch(loadNewTeamSuccess(payload))
  }
}

const loadNewTeamSuccess = (payload) => ({
  type: LOAD_NEWTEAMS_SUCCESS,
  payload: payload
})

const loadTeamsSuccess = (payload) => ({
  type: LOAD_TEAMS_SUCCESS,
  payload: payload
})

const loadTeamsLoading = (payload) => ({
  type: LOAD_TEAMS_LOADING
})

const loadTeamsError = (payload) => ({
  type: LOAD_TEAMS_ERROR
})
