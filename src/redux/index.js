import { createStore } from 'redux'

// ACTIONS
export function getNewsArsRdx (news) {
  return {type: 'GET_NEWS', payload: news}
}

export function getNewsSearchRdx (newsSearch) {
  return {type: 'SEARCH_NEWS', payload: newsSearch}
}

// REDUCERS
export function reducer (state={
  newsArs: [],
  newsSearch: []
}, action) {
  switch (action.type) {
    case 'GET_NEWS': {
      return {...state, newsArs: action.payload}
    }
    case 'SEARCH_NEWS': {
      return {...state, newsSearch: action.payload}
    }
    default: {
      return state
    }

  }
}

export const store = createStore(reducer)
