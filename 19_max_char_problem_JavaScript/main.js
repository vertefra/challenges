// Given a string, return the character that is most commonly used in the string

// maxChar("absccccbbacc") === "c"
// maxChar("   ddsad3333333dsafg") === "3"

const maxChar = str => {
  const mapChar = {};
  for (let char of str) {
    if (mapChar[char]) {
      mapChar[char]++;
    } else {
      mapChar[char] = 1;
    }
  }
  let max = {
    key: undefined,
    value: 0,
  };
  for (let key of Object.keys(mapChar)) {
    max = mapChar[key] > max.value ? { key, value: mapChar[key] } : max;
  }
  return max.key;
};

module.exports = maxChar;
