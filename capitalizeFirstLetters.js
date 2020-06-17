const assert = require('assert')

const capitalizeFirstLetters = (str) => {
  return str.length > 0 ? str.split(' ').map(word => word[0].toUpperCase() + word.slice(1)).join(' ') : ''
}

assert.strictEqual(typeof capitalizeFirstLetters, 'function')
assert.strictEqual(capitalizeFirstLetters.length, 1)
assert.strictEqual(capitalizeFirstLetters('i am learning TDD'), 'I Am Learning TDD')
assert.strictEqual(capitalizeFirstLetters('a'), 'A')
assert.strictEqual(capitalizeFirstLetters(''), '')