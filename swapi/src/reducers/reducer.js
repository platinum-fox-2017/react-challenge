const initialState = {
  cards: [],
  card: {}
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'GET_CARDS':
      return {
        ...state, cards: action.payload
      }
    case 'GET_CARD':
      return {
        ...state, card: action.payload.card
      }
    case 'RESET_CARD':
      return {
        ...state, card: {}
      }
    default: 
      return state
  }
}

export default reducer