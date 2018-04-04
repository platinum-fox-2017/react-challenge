
// nanti pakai thunk
// export function loadCharacters() {
//   return (dispatch) => {
//     return axios.get('https://swapi.co/api/people/').then(response => {
//       dispatch(inputCharacters(response.data.results))
//     })
//   }
// }

export function loadCharacters(chars) {
  return {
    type: "LOAD_CHARACTERS",
    chars: chars
  }
}

export function loadCharacter (char) {
  return {
    type: "LOAD_CHARACTER",
    char: char
  }
}