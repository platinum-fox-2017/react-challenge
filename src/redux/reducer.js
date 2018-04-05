import { ERROR, FETCH_STORY, FETCH_STORIES, FETCH_COMMENTS, LOADING, LOADING_FINISH } from './actionTypes'

const initialState = {
  articles: [],
  article: {},
  comments: [],
  loading: false,
  error: false
}
const reducer = (state = initialState, action) => {
  if(action.type === FETCH_STORIES) {
    return {
      ...state, 
      articles: [...state.articles, action.articles]
    }
  }

  if(action.type === FETCH_STORY) {
    return {...state, article: action.article }
  }

  if(action.type === ERROR) {
    return {...state, error: true }
  }

  if(action.type === LOADING) {
    return {...state, loading: true }
  }

  if(action.type === LOADING_FINISH) {
    return {...state, loading: false }
  }
  
  if(action.type === FETCH_COMMENTS) {
    return {...state, comments: [...state.comments, action.comments]}
  }
  return state
}

export default reducer
