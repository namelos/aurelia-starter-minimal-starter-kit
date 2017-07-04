export const INCREMENT = 'counter/INCREMENT';

const initalState = { n: 0 }

export const counter = (state = initalState, action) => {
  switch (action.type) {
    case INCREMENT: return { n: state.n + 1 }
    default: return state
  }
}

export const increment = () => ({ type: INCREMENT })