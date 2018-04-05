import { 
  FETCH_UNIVERSITY_DETAIL_ERROR,
  FETCH_UNIVERSITY_DETAIL_LOADING,
  FETCH_UNIVERSITY_DETAIL_SUCCESS
 } from '../universities.actionTypes'

const initState = {
  university: {
    name: '',
    website: '',
    country: ''
  },
  loading: false,
  error: false
}

const reducers = (state={...initState}, action) => {
  switch(action.type) {
    case FETCH_UNIVERSITY_DETAIL_SUCCESS: 
      return {
        ...state, 
        university: {
          name: action.payload.name,
          website: action.payload.website,
          country: action.payload.country
        },
        loading: false
      }
    case FETCH_UNIVERSITY_DETAIL_LOADING:
      return {
        ...state,
        loading: true,
        error: false
      }
    case FETCH_UNIVERSITY_DETAIL_ERROR:
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
