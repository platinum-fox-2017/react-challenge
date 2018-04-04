const initialState = {
  data_team: [],
  data_player: [],
  search: ''
}

function reducer(state = initialState, action) {
  console.log(action);
  switch (action.type) {
    case "INSERT_DATA": {
      return {
        data_team: action.payload
      }
    }
    case "INSERT_PLAYER": {
      return {
        data_player: action.payload
      }
    }
    case "SEARCH_TEAM": {
      return {
        search: action.payload,
        data_team: state.data_team
      }
    }
    case "TEAM_SEARCH": {
      return {
        ...state,data_team: action.payload
      }
    }
    default:
      return state;
  }
}

export default reducer
