const fetchCharaters = (payload) => {
  return {
    type: 'FETCHCHARACTERS',
    payload: payload
  }
}

const loading = () => {
  return { type: 'LOADING' }
}

const searchCharacter = (payload) => {
  return {
    type: 'SEARCHCHARACTER',
    payload: payload
  }
}

const goPage = (payload) => {
  return {
    type: 'GO_PAGE',
    payload: payload
  }
}

export {
  fetchCharaters,
  loading,
  searchCharacter,
  goPage
}