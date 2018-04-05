import {
  LOADING,
  FETCH_CHARACTERS,
  SEARCH_CHARACTER,
  GO_PAGE,
  ERROR
} from './characters.actionTypes';

export const loading = () => {
  return { type: LOADING }
}

export const fetchCharacters = (payload) => ({
  type: FETCH_CHARACTERS,
  payload: payload
})

export const searchCharacter = (payload) => {
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
