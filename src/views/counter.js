import { connect } from '../store'
import { increment, add } from '../models/counter'

@connect(({ n }) => ({ n }), { increment, add })
export class Counter {}
