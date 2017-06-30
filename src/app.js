import { redux, store } from './lib/store'
import { INCREMENT } from './models/counter'

@redux
export class App {
  text = 'world'

  constructor() {
    this.select(state => state.counter)
  }

  onClick() {
    store.dispatch({ type: INCREMENT })
  }
}