import { 
  CLEAR_STORIES,
  CLEAR_SEARCH,
  CLEAR_COMMENTS,
  SEARCH_STORY, 
  ERROR, 
  FETCH_STORY, 
  FETCH_STORIES, 
  FETCH_COMMENTS, 
  LOADING, 
  LOADING_FINISH 
} from './actionTypes'

const initialState = {
  articles: [],
  searchArticles: [],
  isSearch: false,
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

  if(action.type === SEARCH_STORY) {
    let searchArticles = [] 
    for (let i = 0; i < state.articles.length; i++) {
      const search = state.articles[i].title.toLowerCase().search(action.query.toLowerCase())
      if (search >= 0) {
        searchArticles.push(state.articles[i])
      }
    }
    return {...state, searchArticles: searchArticles, isSearch: true }
  }

  if(action.type === CLEAR_SEARCH) {
    return {...state, searchArticles: [], isSearch: false}
  }

  if(action.type === CLEAR_STORIES) {
    return {...state, articles: [] }
  }

  if(action.type === CLEAR_COMMENTS) {
    return {...state, comments: [] }
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
