import { provider } from '../src/provider'
import { counter, INCREMENT } from '../src/counter'
import { createStore } from '../src/createStore'

describe('provider', () => {
  it('should inject state', () => {
    const store = createStore(counter)

    const connect = provider(store)

    @connect(state => state * 10)
    class Component {
      constructor(data) {
        this.data = data
      }
    }

    const component = new Component('The precious data...')

    expect(component.state).toBe(0)

    store.dispatch({ type: INCREMENT })

    expect(component.state).toBe(10)
  })
})