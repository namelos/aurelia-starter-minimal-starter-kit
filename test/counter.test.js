import { counter, INCREMENT } from '../src/counter'

describe('counter', () => {
  it('should return 0 when init', () => {
    const actual = counter(undefined, { type: 'Any' })
    expect(actual).toBe(0)
  })

  it('should returns 1 when increment from 0', () => {
    const actual = counter(0, { type: INCREMENT })
    expect(actual).toBe(1)
  })
})
