import { provider } from '../src/provider'
import { counter, INCREMENT } from '../src/counter'
import { createStore } from '../src/createStore'

describe('provider', () => {
  it('should inject state', () => {
    const store = createStore(counter)

    const connect = provider(store)

    @connect(({ n }) =>  ({ n: n * 10 }))
    class Component {
      constructor(data) {
        this.data = data
      }
    }

    const component = new Component('The precious data...')
    expect(component.data).toBe('The precious data...')
    expect(component.state).toEqual({ n: 0 })

    store.dispatch({ type: INCREMENT })
    expect(component.state).toEqual({ n: 10 })
  })

  it('should diff state', () => {
    const store = createStore(counter)

    const connect = provider(store)

    @connect(state => ({ n: 1 }))
    class Component {
      constructor(data) {
        this.data = data
      }
    }

    const component = new Component('The precious data...')
    expect(component.data).toBe('The precious data...')
    const prevState = component.state

    store.dispatch({ type: INCREMENT })

    expect(component.state).toBe(prevState)
  })
})