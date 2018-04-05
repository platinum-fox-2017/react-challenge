const initialState = {
  articles : []
}

const reducer = (state = initialState, action)=>{
  switch (action.type){
    case 'GET_DATA' :
      return {...state, articles:action.payload}
    default: {
      return state
    }
  }
}
export default reducer