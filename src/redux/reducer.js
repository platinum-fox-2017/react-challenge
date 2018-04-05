import {
  GET_NEWS_OK, GET_NEWS_LOAD, GET_NEWS_ERR,
  SEARCH_NEWS_OK, SEARCH_NEWS_LOAD, SEARCH_NEWS_ERR
} from './actionTypes.js'
// REDUCERS
export default function reducer (state={
  isLoading: false,
  err: null,
  newsArs: [],
  newsSearch: []
}, action) {
  switch (action.type) {
    case GET_NEWS_OK: {
      return {
        ...state,
        newsArs: action.payload,
        isLoading: false
      }
    }
    case GET_NEWS_LOAD: {
      return {
        ...state,
        isLoading: true
      }
    }
    case GET_NEWS_ERR: {
      return {
        ...state,
        isLoading: false,
        err: action.payload.message
      }
    }
    case SEARCH_NEWS_OK: {
      return {
        ...state,
        newsSearch: action.payload,
        isLoading: false
      }
    }
    case SEARCH_NEWS_LOAD: {
      return {
        ...state,
        isLoading: true
      }
    }
    case SEARCH_NEWS_ERR: {
      return {
        ...state,
        isLoading: false,
        err: action.payload.message
      }
    }
    default: {
      return state
    }

  }
}
