// write a fuinctionm that accepts a string. The function should capitalize the first aletter of
// each word and return the capitalized string

const capitalized = str => {
  const words = [];
  for (let word of str.split(' ')) {
    words.push(word[0].toUpperCase() + word.slice(1));
  }
  return words.join(' ');
};

module.exports = capitalized;
