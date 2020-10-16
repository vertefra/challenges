// Anagrams

// Check if tweo provided string are anagrams of eachother
// Only consider characters, not punctuation.
// Consider capital letters to be the same as lowercase

const anagram = (strA, strB) => {
  const hashStrA = mapString(strA);
  const hashStrB = mapString(strB);

  if (Object.keys(hashStrA).length !== Object.keys(hashStrB).length)
    return false;

  for (let char in hashStrA) {
    if (hashStrB[char] !== hashStrA[char]) return false;
  }

  return true;
};

const mapString = str => {
  const obj = {};
  for (let char of str) {
    char = char.toLowerCase();
    if (char.match(/^\w*$/g)) obj[char] = obj[char] + 1 || 1;
  }
  return obj;
};

module.exports = anagram;
