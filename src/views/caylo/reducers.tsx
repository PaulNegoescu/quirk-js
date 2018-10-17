import { Reducer } from 'redux'

export const initialState = []

// Reducer<initialStateType>
const testReducer: Reducer = (state = initialState, action) => {
  switch (action.type) {
    default:
      return state
  }
}

export default testReducer
