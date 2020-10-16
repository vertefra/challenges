// Anagrams

// Check if tweo provided string are anagrams of eachother
// Only consider characters, not punctuation.
// Consider capital letters to be the same as lowercase

// const anagram = (strA, strB) => {
//   const hashStrA = mapString(strA);
//   const hashStrB = mapString(strB);

//   if (Object.keys(hashStrA).length !== Object.keys(hashStrB).length)
//     return false;

//   for (let char in hashStrA) {
//     if (hashStrB[char] !== hashStrA[char]) return false;
//   }

//   return true;
// };

// const mapString = str => {
//   const obj = {};
//   for (let char of str.replace(/^\w*$/g, '').toLowerCase()) {
//     obj[char] = obj[char] + 1 || 1;
//   }
//   return obj;
// };

const anagram = (strA, strB) => {
  strA = strA.replace(/^w*$/g, '').toLowerCase().split('').sort().join('');
  strB = strB.replace(/^w*$/g, '').toLowerCase().split('').sort().join('');
  return strA === strB;
};

module.exports = anagram;
