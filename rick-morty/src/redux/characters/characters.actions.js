import {
  LOADING,
  FETCH_CHARACTERS,
  SEARCH_CHARACTER,
  GO_PAGE,
  ERROR
} from './characters.actionTypes';
import axios from 'axios';

export const loading = () => {
  return { type: LOADING }
}

export const fetchingCharacters = (payload) => {
  return dispatch => {
    axios.get(`https://rickandmortyapi.com/api/character/?page=${payload}`)
      .then(({ data }) => {
        dispatch(fetchCharacters(data.results))
      })
      .catch((err) => {
        window.alert(err)
      });
  }
};

const fetchCharacters = (payload) => {
  console.log('masuk Actions ===> ', payload)
  return {
    type: FETCH_CHARACTERS,
    payload: payload
  }
}

export const searchingCharacter = (payload) => {
  return dispatch => {
    axios.get(`https://rickandmortyapi.com/api/character/${payload}`)
      .then(({ data }) => {
        dispatch(searchCharacter(data))
      })
      .catch((err) => {
        window.alert(err)
      });
  }
}

const searchCharacter = (payload) => {
  return {
    type: SEARCH_CHARACTER,
    payload: payload
  }
}

export const goPage = (payload) => {
  return {
    type: GO_PAGE,
    payload: payload
  }
}

export const error = () => {
  return { type: ERROR }
}
