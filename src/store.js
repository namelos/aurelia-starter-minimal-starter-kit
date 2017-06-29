import { createStore, combineReducers } from 'redux'

export const INCREMENT = 'counter/INCREMENT';

export const counter = (state = 0, action) => {
  switch (action.type) {
    case INCREMENT: return state + 1
    default: return state
  }
};

const reducer = combineReducers({ counter })

export const store = createStore(reducer)

store.subscribe(() => console.log(store.getState()))

window.inc = () => store.dispatch({ type: INCREMENT })

export const redux = target => {
  target.prototype.select = function(mapState) {
    const that = this

    const sync = () => {
      const state = store.getState()
      const selected = mapState(state)
      console.log(selected)
      that.state = selected
    }

    sync()

    store.subscribe(sync)
  }

  return target
}
