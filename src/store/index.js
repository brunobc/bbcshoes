import { createStore } from 'redux'
import roorReducer from './modules/rootReducer'

const enhancer =
  process.env.NODE_ENV === 'development' ? console.tron.createEnhancer() : null
const store = createStore(roorReducer, enhancer)

export default store
