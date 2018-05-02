import {
  GET_LEAGUE_TABLE,
  LOADING_DATA,
  ERROR_DATA
} from './leaguetable.actionTypes'


const initialState = {
  loading_data: false,
  error_data: false,
  leagueTable: []
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_LEAGUE_TABLE:
      return { 
        ...state,
        loading_data: false,
        error_data: false,
        leagueTable: action.payload 
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
