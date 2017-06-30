import { createStore, combineReducers } from 'redux'
import { INCREMENT } from '../models/counter'

const reducer = combineReducers({ counter })

export const store = createStore(reducer)

store.subscribe(() => console.log(store.getState()))

window.inc = () => store.dispatch({ type: INCREMENT })

