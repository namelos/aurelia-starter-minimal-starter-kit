import { shallowEqual } from './shallowEqual'

export const provider = store => mapState => target => {
  let prev = null

  const injected = function(...args) {
    const sync = () => {
      const state = store.getState()
      const selected = mapState(state)

      if (!shallowEqual(prev, selected)) {
        this.state = selected
        prev = selected
      }
    }

    sync()

    store.subscribe(sync)

    return target.apply(this, args)
  }

  injected.prototype = target.prototype

  return injected
}
