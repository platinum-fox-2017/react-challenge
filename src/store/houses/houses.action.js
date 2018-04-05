import axios from 'axios'

// actionType
import {
  LOAD_HOUSES_LOADING,
  LOAD_HOUSES_ERR,
  LOAD_HOUSES_OK
} from './houses.actionTypes'

export const loadHouses = (payload) => {

  return dispatch => {

    dispatch(loadHousesLoading())
    axios.get('https://api.got.show/api/houses/')
    .then(response => {
      dispatch(loadHousesOK(response))
    })
    .catch(err => {
      dispatch(loadHousesErr())
    })
  }
}

const loadHousesOK = (payload) => ({
  type: LOAD_HOUSES_OK,
  payload: payload,
})

const loadHousesLoading = () => ({
  type: LOAD_HOUSES_LOADING,
})

const loadHousesErr = () => ({
  type: LOAD_HOUSES_ERR,
})