import { createStore } from 'redux'
import roorReducer from './modules/rootReducer'

const store = createStore(roorReducer)

export default store
