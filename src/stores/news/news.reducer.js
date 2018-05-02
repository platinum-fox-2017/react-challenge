import {
  LOAD_NEWS_LOADING,
  LOAD_NEWS_SUCCESS,
  LOAD_NEWS_ERROR
} from './news.actionType'

const initialState = {
  loading: false,
  error: false,
  articles : [],
  detailArticle: {}
}

const reducers = (state = { ...initialState }, action)=>{
  switch (action.type){
    case LOAD_NEWS_LOADING :
      return {
        ...state, 
        loading: true
      }
    case LOAD_NEWS_SUCCESS:
      return {
        ...state, 
        articles:action.payload,
        loading: false
      }
    case LOAD_NEWS_ERROR:
      return {
        ...state, 
        loading: false,
        error: true
      }
    default: 
      return state
  }
}
export default reducers