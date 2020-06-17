const assert = require('assert')
const capitalizeFirstLetters = require('../capitalizeFirstLetters')

describe('capitalizeFirstLetters', () => {
  it('is a function accepting one argument', () => {
    assert.strictEqual(typeof capitalizeFirstLetters, 'function')
    assert.strictEqual(capitalizeFirstLetters.length, 1)
  })
  it('transform i am learning TDD correctly', () => {
    assert.strictEqual(capitalizeFirstLetters('i am learning TDD'), 'I Am Learning TDD')
  })
  it('tworks with a 1-character string', () => {
    assert.strictEqual(capitalizeFirstLetters('a'), 'A')
  })
  it('worls with an empty strting', () => {
    assert.strictEqual(capitalizeFirstLetters(''), '')
  })
})

