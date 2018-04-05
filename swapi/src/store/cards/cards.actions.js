import { GET_CARDS, GET_CARD, CHECK_LOADING, CHECK_ERROR } from './cards.actionTypes'

import axios from 'axios'

export const getCardsAct = (cards) => {
  return dispatch => {
    dispatch(checkLoading())
    axios.get('https://api.pokemontcg.io/v1/cards')
      .then((response) => {
        const data = response.data.cards.splice(0, 30)
        dispatch({
          type: GET_CARDS,
          payload: data
        })
      }).catch((err) => {
        dispatch(checkError())
      })
  }
}

export const getCard = (card) => {
  return dispatch => {
    dispatch(checkLoading())
    fetch(`https://api.pokemontcg.io/v1/cards/${card}`)
      .then((resp) => resp.json())
      .then((data) => {
        dispatch({
          type: GET_CARD,
          payload: data
        })
      }).catch((err) => {
        dispatch(checkError())
      })
  }
}

const checkLoading = () => ({
  type: CHECK_LOADING
})

const checkError = () => ({
  type: CHECK_ERROR
})