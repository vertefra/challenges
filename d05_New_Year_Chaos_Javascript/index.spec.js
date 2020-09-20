const { describe } = require("yargs");
const minimumBribes = require("./index.js");

describe("tesrting base cases ", () => {
  test(" test 1", () => {
    expect(minimumBribes([5, 1, 2, 3, 7, 8, 6, 4])).toEqual("Too chaotic");
  });
});
