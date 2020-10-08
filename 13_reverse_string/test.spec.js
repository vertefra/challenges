const reverseString = require("./main");

test("reverse of 'apple' to equal 'elppa'", () => {
  expect(reverseString("apple")).toBe("elppa");
});
