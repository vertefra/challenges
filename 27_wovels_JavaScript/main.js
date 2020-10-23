const wovels = str => {
  const matches = str.match(/[aeiou]/gi);
  return matches ? matches.length : 0;
};

// const wovels = str => {
//   return str.split('').reduce((acc, l) => {
//     return ['a', 'e', 'i', 'o', 'u'].includes(l.toLowerCase()) ? acc + 1 : acc;
//   }, 0);
// };

wovels('alambicco');

module.exports = wovels;
