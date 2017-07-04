export const INCREMENT = 'counter/INCREMENT'
export const ADD = 'counter/ADD'

const initalState = { n: 0 }

export const counter = (state = initalState, action) => {
  switch (action.type) {
    case INCREMENT:
      return { n: state.n + 1 }
    case ADD:
      return { n: state.n + action.n }
    default:
      return state
  }
}

export const increment = () => ({ type: INCREMENT })
export const add = n => ({ type: ADD, n })