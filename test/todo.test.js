import { todos, addTodo } from '../src/models/todos'

describe('todos', () => {
  const initialState = todos(undefined, {})

  it('should init an empty list of todos', () =>
    expect(initialState).toEqual([]))

  const addedTodo = todos(initialState, addTodo('The first todos'))

  it('should add a new todos', () =>
    expect(addedTodo).toEqual([{ text: 'The first todos' }]))
})

