const { expect } = require("@jest/globals");
const isPalindrome = require("./main.js");

test("isPalindrom('radar') should return true  ", () => {
  expect(isPalindrome("radar")).toEqual(true);
});

test("isPalindrom('rada') shoudl return false ", () => {
  expect(isPalindrome("rada")).toEqual(false);
});
