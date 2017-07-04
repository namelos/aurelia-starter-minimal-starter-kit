import { provider } from '../src/lib/provider'
import { counter, INCREMENT, increment, add } from '../src/models/counter'
import { createStore } from '../src/lib/createStore'

describe('provider', () => {
  it('should inject state to bind life cycle hook', () => {
    const store = createStore(counter)

    const connect = provider(store)

    @connect(({ n }) =>  ({ n: n * 10 }))
    class Component {
      constructor(data) {
        this.data = data
      }
    }

    const component = new Component('The precious data...')
    component.bind()
    expect(component.data).toBe('The precious data...')
    expect(component.n).toBe(0)

    store.dispatch({ type: INCREMENT })
    expect(component.n).toBe(10)
  })

  it('should inject to unbind life cycle', () => {
    const store = createStore(counter)

    const connect = provider(store)

    @connect(({ n }) =>  ({ n: n * 10 }))
    class Component {
      constructor(data) {
        this.data = data
      }
    }

    const component = new Component('The precious data...')
    component.bind()
    expect(component.data).toBe('The precious data...')
    expect(component.n).toBe(0)

    component.unbind()
    store.dispatch({ type: INCREMENT })
    expect(component.n).toBe(0)
  })

  it('should call the old bind life cycle hook of the original class', () => {
    const store = createStore(counter)

    const connect = provider(store)

    @connect(({ n }) =>  ({ n: n * 10 }))
    class Component {
      constructor(data) {
        this.data = data
      }

      bind() {
        console.log('this', this)
        this.binded = 'the bind hook has been properly called'
      }

      unbind() {
        this.unbinded = 'the unbinded hook has been properly called'
      }
    }

    const component = new Component('The precious data...')

    component.bind()
    expect(component.data).toBe('The precious data...')
    expect(component.n).toBe(0)
    expect(component.binded).toBe('the bind hook has been properly called')

    component.unbind()
    store.dispatch({ type: INCREMENT })
    expect(component.n).toBe(0)
    expect(component.unbinded).toBe('the unbinded hook has been properly called')
  })

  it('should map dispatch to component property with action creators', () => {
    const store = createStore(counter)

    const connect = provider(store)

    @connect(({ n }) =>  ({ n: n * 10 }), { increment })
    class Component {
      constructor(data) {
        this.data = data
      }
    }

    const component = new Component('The precious data...')
    component.bind()
    expect(component.n).toBe(0)

    component.increment()
    expect(component.n).toBe(10)
  })

  it('should pass args to mapDispatch', () => {
    const store = createStore(counter)

    const connect = provider(store)

    @connect(({ n }) =>  ({ n: n * 10 }), { add })
    class Component {
      constructor(data) {
        this.data = data
      }
    }

    const component = new Component('The precious data...')
    component.bind()
    expect(component.n).toBe(0)

    component.add(10)
    expect(component.n).toBe(100)
  })
})