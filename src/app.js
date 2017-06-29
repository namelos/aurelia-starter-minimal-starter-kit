import { redux, store, INCREMENT } from './store'

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