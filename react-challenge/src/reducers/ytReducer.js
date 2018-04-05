import { FETCH_YT_VIDEOS_SUCCESS, FETCH_YT_VIDEOS_LOADING, FETCH_YT_VIDEOS_ERROR } from '../actions/ytActionTypes'

const initialState = {
  loading: false,
  error: false,
  data: []
}

export default function(state = initialState, action) {
  // console.log("ytReducer/ action ", action)
  // console.log("ytReducer/ action.type ", action.type)
  // console.log("ytReducer/ action.payload ", action.payload)
  switch (action.type) {
    case FETCH_YT_VIDEOS_SUCCESS:
      return {
        ...state, 
        data: action.payload,
        loading: false,
        error: false
      }
    case FETCH_YT_VIDEOS_LOADING:
    console.log("FETCH_YT_VIDEOS_LOADING ", action)
    return {
      ...state,
      loading: true,
      error: false
    }
    case FETCH_YT_VIDEOS_ERROR:
    return {
      ...state,
      loading: false,
      error: true
    }
    default:
      return state
  }
}
