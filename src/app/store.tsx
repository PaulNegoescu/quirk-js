import { createStore, combineReducers, Reducer } from 'redux'
import testReducer from '../views/caylo/reducers'

const rootReducer: Reducer = combineReducers({ testReducer })

const store = createStore(rootReducer)

export default store
