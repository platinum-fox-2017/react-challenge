export function insertData(data) {
  // console.log(data);
  return {
    type: "INSERT_DATA",
    payload: data
  }
}

export function insertPlayer(data) {
  return {
    type: "INSERT_PLAYER",
    payload: data
  }
}

export function insertSearch(data) {
  return {
    type: "SEARCH_TEAM",
    payload: data
  }
}

export function searchTeam(data) {
  return {
    type: "TEAM_SEARCH",
    payload: data
  }
}
