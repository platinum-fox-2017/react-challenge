const incrementAction  = () => ({
  type: 'INCREMENT' 
})

const decrementAction = () =>({
  type: 'DECREMENT'
})  

const incrementByAction = num => ({
  type: 'INCREMENT',
  payload: num 
})

export {
  incrementAction,
  decrementAction,
  incrementByAction
}