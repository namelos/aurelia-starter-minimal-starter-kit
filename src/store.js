import { createStore } from './lib/createStore'
import { combineReducers } from './lib/combineReducers'
import { provider } from './lib/provider'
import { counter } from './models/counter'
import { todos } from './models/todos'

export const store = createStore(combineReducers({ counter, todos }))

window.store = store

store.subscribe(() => {
  console.log(store.getState())
})

export const connect = provider(store)