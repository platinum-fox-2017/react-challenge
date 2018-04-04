let defaultState = {
  chars: [],
  char: {}
}

const characterReducer = (state = defaultState, action) => {
  if (action.type === 'LOAD_CHARACTERS') {
    console.log("LOAD_CHARACTERS")
    return{
      ...state,
      chars: action.chars
    }
  }else if(action.type === 'LOAD_CHARACTER'){
    console.log('LOAD_CHARACTER')
    return{
      ...state,
      char: action.char
    }
  }
  else{
    return{
      ...state
    }
  }
}

export default characterReducer