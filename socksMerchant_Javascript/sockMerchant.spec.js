const socks = require("./sockMerchant");

test("socks() is a function", () => {
  expect(typeof socks).toEqual("function");
});

describe("The returning value for ", () => {
  const arr1 = [1, 1, 2, 2, 3, 3];
  const arr2 = [1, 2, 3, 1, 2, 3];
  const arr3 = [0, 2, 1, 4, 4, 5];
  test("arr1", () => {
    expect(socks(arr1.length, arr1)).toEqual(3);
  });
  test("arr2", () => {
    expect(socks(arr2.length, arr2)).toEqual(3);
  });
  test("arr3", () => {
    expect(socks(arr3.length, arr3)).toEqual(1);
  });
});
