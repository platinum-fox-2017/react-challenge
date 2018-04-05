const fetchCharaters = (payload) => {
  return {
    type: 'FETCH_CHARACTERS',
    payload: payload
  }
}

const loading = () => {
  return { type: 'LOADING' }
}

const searchCharacter = (payload) => {
  return {
    type: 'SEARCH_CHARACTER',
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