function reducer (state={}, action) {
  switch (action.type) {
    case 'GETPHOTO': {
      state = { ...state, payload: action.payload }
      break;
    }
    default: { console.log('masuk default'); break; }
  }
  return state
}
 
export default reducer

