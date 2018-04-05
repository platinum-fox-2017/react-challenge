import {
  LOADING,
  SEARCH_CHARACTER,
  ERROR
} from './characterDetail.actionTypes';
import axios from 'axios';

export const loading = () => {
  return { type: LOADING }
}

export const searchingCharacter = (payload) => {
  return dispatch => {
    axios.get(`https://rickandmortyapi.com/api/character/${payload}`)
      .then(({ data }) => {
        dispatch(searchCharacter(data))
      })
      .catch((err) => {
        dispatch(error())
      });
  }
}

const searchCharacter = (payload) => {
  return {
    type: SEARCH_CHARACTER,
    payload: payload
  }
}

const error = () => {
  return { type: ERROR }
}
