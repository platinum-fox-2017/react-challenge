import { FETCH_YT_VIDEOS } from '../actions/ytActionTypes'

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
    case FETCH_YT_VIDEOS:
      return {
        ...state, 
        data: action.payload
      }
    default:
      return state
  }
}
