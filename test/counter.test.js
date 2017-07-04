import { counter, INCREMENT, ADD } from '../src/models/counter'

describe('counter', () => {
  it('should return 0 when init', () => {
    const actual = counter(undefined, { type: 'Any' })
    expect(actual).toEqual({ n: 0 })
  })

  it('should returns 1 when increment from 0', () => {
    const actual = counter({ n: 0 }, { type: INCREMENT })
    expect(actual).toEqual({ n: 1 })
  })

  it('should return 11 when add 10 from 1', () => {
    const actual = counter({ n: 1 }, { type: ADD, n: 10 })
    expect(actual).toEqual({ n: 11 })
  })
})
