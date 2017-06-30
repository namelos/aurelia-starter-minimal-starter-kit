export const provider = store => mapState => target => {
  const injected = function(...args) {
    const sync = () => {
      const state = store.getState()
      this.state = mapState(state)
    }

    sync()

    store.subscribe(sync)

    return target.apply(this, args)
  }

  injected.prototype = target.prototype

  return injected
}
