// ACTIONS



// REDUCER
export function reducer (state, action) {
  if (action.type === 'GET_NEWS') {
    return {...state, newsArs: action.payload}
  } else if (action.type === 'SEARCH_NEWS') {
    return {...state, newsSearch: action.payload}
  }
}
