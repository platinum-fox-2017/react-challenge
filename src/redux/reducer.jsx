const initialState = {
  data: [],
  dataNews: []
}

const reducer = (state=initialState, action) => {
  // console.log(action.payload, "dalam reducer")
  switch (action.type) {
    case "GET_GIF_DATA":
      // console.log({...state, data: action.payload})
      return {...state, data: action.payload}
    case "GET_NEWS_DATA":
      return {...state, dataNews: action.payload}
  }
  return state
}

export default reducer;