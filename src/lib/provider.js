import { shallowEqual } from './shallowEqual'

export const provider = store => mapState => target => {
  let prev = null
  let dispose = null

  target.prototype.bind = function(...args) {
    const sync = () => {
      const state = store.getState()
      const selected = mapState(state)

      if (!shallowEqual(prev, selected)) {
        this.state = selected
        prev = selected
      }
    }

    sync()

    dispose = store.subscribe(sync)
  }

  target.prototype.unbind = function(...args) {
    if (dispose) dispose()
  }
}
