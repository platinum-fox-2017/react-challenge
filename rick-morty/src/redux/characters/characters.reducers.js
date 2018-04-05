import { LOADING, FETCH_CHARACTERS, SEARCH_CHARACTER, GO_PAGE, ERROR } from './characters.actionTypes';

const initialState = {
  isLoading: true,
  pageIndex: 1,
  characters: [],
  activeCharacter: {},
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
    case FETCH_CHARACTERS: {
      return { 
        ...state,
        characters: [ ...action.payload ],
        isLoading: false
      }
    }
    case SEARCH_CHARACTER: {
      return { 
        ...state,
        activeCharacter: action.payload,
        isLoading: false
      }
    }
    case GO_PAGE: {
      return { 
        ...state,
        pageIndex: action.payload
      }
    }
    case ERROR: {
      return { 
        ...state,
        error: true,
        isLoading: true 
      }
    }
    default: {
      return state
    }
  }
};

export default reducers;