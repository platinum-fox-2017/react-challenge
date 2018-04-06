import {INCREMENT,DECREMENT} from './count.actiontype'

const initialState = {
  count : 0
}

const reducerCount = (state = initialState, action) => {
  switch(action.type){
    case INCREMENT:{
      if(action.payload){
        return {count: state.count + action.payload}
      }
      return {count: state.count + 1}
    }
    case DECREMENT: {
      return {count: state.count - 1}
    }
    default : {
      return state
    }
  }
}

export{
  reducerCount
}