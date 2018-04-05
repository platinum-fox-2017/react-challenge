import { GET_CARDS, GET_CARD, CHECK_LOADING, CHECK_ERROR } from './cards.actionTypes'

const initialState = {
  loading: false,
  error: false
}

export const cardsReducer = (state = { ...initialState, data: [] }, action) => {
  switch (action.type) {
    case CHECK_LOADING:
      return {
        ...state, loading: true
      }
    case GET_CARDS:
      return {
        ...state,
        data: action.payload,
        loading: false
      }
    case CHECK_ERROR:
      return {
        ...state,
        error: true,
        loading: false
      }
    default: 
      return state
  }
}

export const cardReducer = (state = { ...initialState, data: {} }, action) => {
  switch (action.type) {
    case CHECK_LOADING:
      return {
        ...state, loading: true
      }
    case GET_CARD:
      return {
        ...state, 
        data: action.payload.card,
        loading: false
      }
    case CHECK_ERROR:
      return {
        ...state,
        error: true,
        loading: false
      }
    default:
      return state
  }
}