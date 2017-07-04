import { shallowEqual, mapObject } from './utils'

export const provider = store => (mapState, mapDispatch) => target => {
  let prev = null
  let dispose = null

  const originalBind = target.prototype.bind
  const originalUnbind = target.prototype.unbind

  target.prototype.bind = function (...args) {
    const sync = () => {
      const state = store.getState()
      const selected = mapState(state)

      if (!shallowEqual(prev, selected)) {
        Object.assign(this, selected)
        prev = selected
      }
    }

    sync()

    dispose = store.subscribe(sync)

    if (mapDispatch) {
      const actionCreatorsWithDispatch = {}

      Object.keys(mapDispatch).forEach(actionCreatorKey => {
        const actionCreatorValue = mapDispatch[actionCreatorKey]
        actionCreatorsWithDispatch[actionCreatorKey] = (...args) => store.dispatch(actionCreatorValue(...args))
      })

      Object.assign(this, actionCreatorsWithDispatch)
    }

    if (originalBind) originalBind.apply(this, args)
  }

  target.prototype.unbind = function (...args) {
    if (dispose) dispose()
    if (originalUnbind) originalUnbind.apply(this, ...args)
  }
}
