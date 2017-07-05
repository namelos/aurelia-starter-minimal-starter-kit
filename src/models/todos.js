const ADD_TODO = 'todos/ADD_TODO'

export const todos = (state = [], action) => {
  switch (action.type) {
    case ADD_TODO:
      return [...state, { text: action.text }]
    default:
      return state
  }
}

export const addTodo = text => ({ type: ADD_TODO, text })