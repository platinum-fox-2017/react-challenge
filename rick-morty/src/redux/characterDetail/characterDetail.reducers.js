import {
  LOADING,
  SEARCH_CHARACTER,
  ERROR
} from './characterDetail.actionTypes';

const initialState = {
  isLoading: true,
  character: {
    location: {
      image: '',
      name: '',
      status: '',
      species: '',
      gender: '',
      location: {
        name: ''
      }
    }
  },
  error: false,
};

const reducers = (state = { ...initialState }, action) => {
  switch(action.type) {
    case LOADING: {
      return { 
        ...state, 
        isLoading: true 
      }
    }
    case SEARCH_CHARACTER: {
      return { 
        ...state,
        character: action.payload,
        isLoading: false
      }
    }
    case ERROR: {
      return { 
        ...state,
        error: true,
        isLoading: false 
      }
    }
    default: {
      return state
    }
  }
};

export default reducers;