import { 
  UPDATE_PREVIOUS_LOCATION
 } from '../universities.actionTypes'

const initState = {
  prevLocation: ''
}

const reducers = (state={...initState}, action) => {
  switch(action.type) {
    case UPDATE_PREVIOUS_LOCATION: 
      return {
        ...state, 
        prevLocation: action.payload
      }
    default: 
      return state
  }
}

export default reducers
