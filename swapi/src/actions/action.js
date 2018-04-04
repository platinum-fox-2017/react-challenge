const getCardsAct = (cards) => ({
  type: 'GET_CARDS',
  payload: cards
})

const getSingleCard = (card) => ({
  type: 'GET_CARD',
  payload: card
})

const resetCard = () => ({
  type: 'RESET_CARD'
})

export { getCardsAct, getSingleCard, resetCard }