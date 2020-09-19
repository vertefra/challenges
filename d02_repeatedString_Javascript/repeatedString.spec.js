const repeatedString = require("./repeatedString");

describe("testing with base cases ", () => {
  test(" s='aba', n=10", () => {
    expect(repeatedString("aba", 10)).toEqual(7);
  });
});

// don't know how to test for very high number but on hackerank was passing all the tests
