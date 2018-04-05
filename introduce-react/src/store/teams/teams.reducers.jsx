import {
  LOAD_TEAMS_SUCCESS,
  LOAD_TEAMS_ERROR,
  LOAD_TEAMS_LOADING,
  LOAD_NEWTEAMS_SUCCESS
} from './teams.actionTypes';

const initialState = {
  loading: false,
  error: false,
  data: [],
}

const reducers = (state={ ...initialState }, action) => {
  switch (action.type) {
    case LOAD_TEAMS_SUCCESS:
      return {
        ...state,
        data: action.payload,
        loading: false
      }
    case LOAD_TEAMS_LOADING:
      return {
        ...state,
        loading: true,
        data: []
      }
    case LOAD_TEAMS_ERROR:
      return {
        ...state,
        error: true,
        loading: false,
      }
    case LOAD_NEWTEAMS_SUCCESS:
      return {
        ...state,
        data: action.payload
      }
    default:
      return state;
  }
}

export default reducers;
