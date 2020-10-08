const reverseString = (string) => {
  const reversed = [];
  const arrStr = string.split("");
  while (arrStr.length > 0) {
    const l = arrStr.pop();
    reversed.push(l);
  }
  return reversed.join("");
};

module.exports = reverseString;
