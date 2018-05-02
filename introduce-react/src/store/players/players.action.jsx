import {
  LOAD_PLAYERS_SUCCESS,
  LOAD_PLAYERS_ERROR,
  LOAD_PLAYERS_LOADING
} from './players.actionTypes';
import axios from 'axios'

export const loadPlayer = (payload) => {
  return dispatch => {
    dispatch(loadPlayersLoading())
    axios({
      method: 'get',
      url: `https://api.opendota.com/api/teams/${payload}/players`
    }).then(({ data }) => {
      dispatch(loadPlayersSuccess(data))
    }).catch(err => dispatch(loadPlayersError()))
  }
}

const loadPlayersSuccess = (payload) => ({
  type: LOAD_PLAYERS_SUCCESS,
  payload: payload
})

const loadPlayersLoading = (payload) => ({
  type: LOAD_PLAYERS_LOADING
})

const loadPlayersError = (payload) => ({
  type: LOAD_PLAYERS_ERROR
})
