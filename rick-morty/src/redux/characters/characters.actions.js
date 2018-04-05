import {
  LOADING,
  FETCH_CHARACTERS,
  GO_PAGE,
  ERROR
} from './characters.actionTypes';
import axios from 'axios';

export const loading = () => {
  return { type: LOADING }
}

export const fetchingCharacters = (payload) => {
  return dispatch => {
    dispatch(loading())
    axios.get(`https://rickandmortyapi.com/api/character/?page=${payload}`)
      .then(({ data }) => {
        dispatch(fetchCharacters(data.results))
      })
      .catch((err) => {
        dispatch(error())
      });
  }
};

const fetchCharacters = (payload) => {
  return {
    type: FETCH_CHARACTERS,
    payload: payload
  }
}

export const goPage = (payload) => {
  return {
    type: GO_PAGE,
    payload: payload
  }
}

const error = () => {
  return { type: ERROR }
}
