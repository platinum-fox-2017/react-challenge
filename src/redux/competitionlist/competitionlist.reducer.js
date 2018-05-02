import {
  GET_COMPETITION_LIST,
  LOADING_DATA,
  ERROR_DATA
} from './competitionlist.actionTypes'


const initialState = {
  message: `Select Your League Below !`,
  loading_data: false,
  error_data: false,
  competitionList: []
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_COMPETITION_LIST:
      return { 
        ...state, 
        loading_data: false,
        error_data: false,
        competitionList: action.payload 
      };
    case LOADING_DATA:
      return {
        ...state,
        loading_data: true,
        error_data: false
      };
    case ERROR_DATA:
      return {
        ...state,
        error_data: true,
        loading_data: false
      };
    default:
      return state;
  }
}

export default reducer
