export const setHeroes = (value) => {
  return {
    type: 'SET_HEROES',
    value
  }
}

export const setSelectedHero = (value) => {
  return {
    type: 'SET_SELECTED_HERO',
    value
  }
}