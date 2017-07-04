import { connect } from '../store'
import { increment } from '../models/counter'

@connect(({ n }) => ({ n }), { increment })
export class Counter {}
