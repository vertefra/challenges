const { expect } = require('@jest/globals');
const maxChar = require('./main');

test('maxChar("   ddsad3333333dsafg") toBe 3', () => {
  expect(maxChar('   ddsad3333333dsafg')).toBe('3');
});
