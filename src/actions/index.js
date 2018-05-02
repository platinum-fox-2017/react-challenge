import axios from 'axios'

export function loadCharacters() {
  return (dispatch) => {
    return axios.get('https://swapi.co/api/people/').then(response => {
      dispatch(loadCharacters(response.data.results))
    })
  }
}

function loadCharacters(chars) {
  return {
    type: "LOAD_CHARACTERS",
    chars: chars
  }
}

function loadCharacter (char) {
  return {
    type: "LOAD_CHARACTER",
    char: char
  }
}