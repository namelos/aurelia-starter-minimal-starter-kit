import { counter, INCREMENT } from '../src/models/counter'

describe('counter', () => {
  it('should return 0 when init', () => {
    const actual = counter(undefined, { type: 'Any' })
    expect(actual).toEqual({ n: 0 })
  })

  it('should returns 1 when increment from 0', () => {
    const actual = counter({ n: 0 }, { type: INCREMENT })
    expect(actual).toEqual({ n: 1 })
  })
})
