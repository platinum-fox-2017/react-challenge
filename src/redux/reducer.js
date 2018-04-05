
const initialState = {
  articles: [],
  comments: [],
  loading: false,
  error: false
}
const reducer = (state = initialState, action) => {
  if(action.type === 'FETCH_STORIES') {
    return {...state, articles: [...state.articles, action.articles]}
  }
  
  if(action.type === 'FETCH_COMMENTS') {
    return {...state, comments: [...state.comments, action.comments]}
  }
  return state
}

export default reducer
