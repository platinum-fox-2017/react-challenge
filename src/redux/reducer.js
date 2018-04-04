function reducer (state={}, action) {
  switch (action.type) {
    case 'GETPHOTO': 
      console.log(action.payload)  
      state = { ...state, payload: action.payload }
      break;
    default: { console.log('masuk default'); break; }
  }
  return state
}
 
export default reducer

