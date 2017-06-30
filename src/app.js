import { redux, store } from './store'
import { INCREMENT } from './counter'

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