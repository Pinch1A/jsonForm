import { contextBuilder, isConditionConfirmed } from './helpers'

const items = [{ name: 'test-item', type: 'text' }]
const properties = { test: { name: 'test-prop', type: 'text' } }
const schema = [{ name: 'test', type: 'text' }]

describe('contextBuilder', () => {
  it('returns null if schema is not provided', () => {
    const context = contextBuilder()
    expect(context).toBeNull()
  })
  it('returns an object with empty string value', () => {
    const context = contextBuilder(schema)
    const expected = { test: '' }
    expect(context).toEqual(expected)
  })
  it(`with items | returns an object with ${items.length} fields`, () => {
    const schemaWithItems = [{ name: 'test', type: 'array', items }]
    const context = contextBuilder(schemaWithItems)
    const expected = { 'test-item': '' }
    expect(context).toEqual(expected)
  })
  it(`with properties | returns an object with ${properties.length} fields`, () => {
    const schemaWithItems = [{ name: 'test', type: 'object', properties }]
    const context = contextBuilder(schemaWithItems)
    const expected = { 'test-prop': '' }
    expect(context).toEqual(expected)
  })
})

const values = {}
describe('isConditionConfirmed', () => {
  it('return true when no conditions passed', () => {
    const result = isConditionConfirmed(null, values)
    expect(result).toBeTruthy()
  })
  it('return true when condition is verified', () => {
    const conditions = [{ test: true }]
    const values = { test: true }
    const result = isConditionConfirmed(conditions, values)
    expect(result).toBeTruthy()
  })
  it('return false when condition is not verified', () => {
    const conditions = [{ test: true }]
    const result = isConditionConfirmed(conditions, values)
    expect(result).toBeFalsy()
  })
})
