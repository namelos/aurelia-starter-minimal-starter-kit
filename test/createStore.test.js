import { createStore } from '../src/lib/createStore'
import { counter, INCREMENT } from '../src/models/counter'

describe('create', () => {
  it('should create store with a reducer', () => {
    const store = createStore(counter)

    expect(store.getState()).toEqual({ n: 0 })

    store.dispatch({ type: INCREMENT })

    expect(store.getState()).toEqual({ n: 1 })
  })

  it('can subscribe and dispose', () => {
    const store = createStore(counter)

    const mockFn = jest.fn()

    const dispose = store.subscribe(mockFn)
    expect(mockFn.mock.calls.length).toBe(0)

    store.dispatch({ type: 'any' })
    expect(mockFn.mock.calls.length).toBe(1)

    store.dispatch({ type: INCREMENT })
    expect(mockFn.mock.calls.length).toBe(2)

    dispose()
    store.dispatch({ type: INCREMENT })
    expect(mockFn.mock.calls.length).toBe(2)
  })
})

