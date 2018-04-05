import { 
  FETCH_UNIVERSITIES_ERROR,
  FETCH_UNIVERSITIES_LOADING,
  FETCH_UNIVERSITIES_SUCCESS,
  CLEAR_UNIVERSITIES_LIST,
  UPDATE_PAGINATE_LIST
 } from '../universities.actionTypes'

const initState = {
  universitiesList: [],
  loading: false,
  error: false,
  paginateList: []
}

const reducers = (state={...initState}, action) => {
  switch(action.type) {
    case FETCH_UNIVERSITIES_SUCCESS: 
      return {
        ...state, 
        universitiesList: action.payload,
        loading: false
      }
    case FETCH_UNIVERSITIES_LOADING:
      return {
        ...state,
        loading: true,
        error: false
      }
    case FETCH_UNIVERSITIES_ERROR:
      return {
        ...state,
        loading: false,
        error: true
      }
    case CLEAR_UNIVERSITIES_LIST:
      return {
        ...state,
        universitiesList: []
      }
    case UPDATE_PAGINATE_LIST:
      return {
        ...state,
        paginateList: action.payload.concat()
      }
    default: 
      return state
  }
}

export default reducers
