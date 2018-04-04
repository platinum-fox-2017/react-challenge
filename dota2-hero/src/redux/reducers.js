export const reducer = (state = { heroes: [], selectedHero: {} }, action) => {
  switch (action.type) {
    case 'SET_HEROES':
      return { ...state, heroes: action.value };
    case 'SET_SELECTED_HERO':
      return { ...state, selectedHero: action.value };
    default:
      return state;
  }
}