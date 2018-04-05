import {
  LOADING,
  FETCH_CHARACTERS,
  SEARCH_CHARACTER,
  ERROR
} from './characters.actionTypes';

export const loading = () => {
  return { type: 'LOADING' }
}

export const fetchCharacters = (payload) => ({
  type: FETCH_CHARACTERS,
  payload: payload
})


export const searchCharacter = (payload) => {
  return {
    type: 'SEARCH_CHARACTER',
    payload: payload
  }
}

export const error = () => {
  return { type: 'ERROR' }
}
