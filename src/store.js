import { createStore } from './lib/createStore'
import { provider } from './lib/provider'
import { counter } from './models/counter'

export const store = createStore(counter)

export const connect = provider(store)