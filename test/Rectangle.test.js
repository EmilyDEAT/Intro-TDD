const assert = require('assert')
const Rectangle = require('../Rectangle')

describe('rectangle', () => {
  it('is a square', () => {
    const rectangle = new Rectangle(5, 5);
    assert.strictEqual(rectangle.isSquare(), true)
  })
  it('is not a square', () => {
    const rectangle = new Rectangle(5, 8);
    assert.strictEqual(rectangle.isSquare(), false)
  })
  it('return Area', () => {
    const rectangle = new Rectangle(13, 7);
    assert.strictEqual(rectangle.getArea(), 91)
  })
  it('return Permimeter', () => {
    const rectangle = new Rectangle(13, 7);
    assert.strictEqual(rectangle.getPerimeter(), 40)
  })
})

