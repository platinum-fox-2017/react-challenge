export function getCompetitionList (payload) {
  return {
    type: 'GETCOMPETITIONLIST',
    payload
  }
}

export function getLeagueTable (payload) {
  return {
    type: 'GETLEAGUETABLE',
    payload
  }
}

export function getDetailClub (payload) {
  console.log('DATA TEAM => ' + JSON.stringify(payload))
  return {
    type: 'GETDETAILCLUB',
    payload
  }
}