import { shallowEqual } from './shallowEqual'

export const provider = store => mapState => target => {
  let prev = null
  let dispose = null

  const originalBind = target.prototype.bind
  const originalUnbind = target.prototype.unbind

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

    if (originalBind) {
      originalBind.apply(this, args)
    }
  }

  target.prototype.unbind = function(...args) {
    if (dispose) dispose()

    if (originalUnbind) {
      originalUnbind.apply(this, ...args)
    }
  }
}
