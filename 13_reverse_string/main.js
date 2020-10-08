// const reverseString = (string) => {
//   return string.split("").reverse().join("");
// };

const reverseString = (string) => {
  return string.split("").reduce((rev, char) => char + rev, "");
};

module.exports = reverseString;
