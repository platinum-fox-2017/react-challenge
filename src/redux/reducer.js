const reducer = (state = { message:`Select Your League Below !`, competitionList: [], leagueTable: [], detailClub: {} }, action) => {
  if(action.type === 'GETCOMPETITIONLIST') {
    return { ...state, competitionList: action.payload }
  } else if (action.type === 'GETLEAGUETABLE') {
    return { ...state, leagueTable: action.payload }
  } else if (action.type === 'GETDETAILCLUB') {
    return { ...state, detailClub: action.payload }
  }
  return state
}

export default reducer
