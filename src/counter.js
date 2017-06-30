export const INCREMENT = 'counter/INCREMENT';

export const counter = (state = 0, action) => {
  switch (action.type) {
    case INCREMENT: return state + 1
    default: return state
  }
};
