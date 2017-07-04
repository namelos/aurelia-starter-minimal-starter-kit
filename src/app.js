import { connect, store } from './store'
import { INCREMENT } from './models/counter'

@connect(({ n }) => ({ n }))
export class App {
  text = 'world'

  onClick() {
    store.dispatch({ type: INCREMENT })
  }
}