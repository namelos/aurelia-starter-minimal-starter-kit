import { connect } from '../store'
import { increment, add } from '../models/counter'

@connect(({ counter }) => ({ n: counter.n }), { increment, add })
export class Counter {}
