const stateInit = {
  characters: [],
  activeCharacter: {},
  isLoading: true,
  pageIndex: 1
};

const reducer = (state = stateInit, action) => {
  switch(action.type) {
    case 'LOADING': {
      return { 
        ...state, 
        isLoading: true 
      }
    }
    case 'FETCHCHARACTERS': {
      return { 
        ...state,
        characters: [ ...action.payload ],
        isLoading: false
      }
    }
    case 'SEARCHCHARACTER': {
      return { 
        ...state,
        activeCharacter: action.payload,
        isLoading: false
      }
    }
    case 'GO_PAGE': {
      return { 
        ...state,
        pageIndex: action.payload
      }
    }
    default: {
      return state
    }
  }
};

export default reducer;