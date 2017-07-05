import { connect } from '../store'
import { addTodo } from '../models/todos'

@connect(({ todos }) => ({ todos }), { addTodo })
export class Todos {}
