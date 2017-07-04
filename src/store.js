import { createStore } from './lib/createStore'
import { provider } from './lib/provider'
import { counter } from './models/counter'

export const store = createStore(counter)

window.store = store

store.subscribe(() => {
  console.log(store.getState())
})

export const connect = provider(store)