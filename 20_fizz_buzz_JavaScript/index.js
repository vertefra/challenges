// write a program tha console logs the numbers from 1 to n
// for multiples of three print fizz for multiple of five print buzz
// fpr numbers multiples of both three and five print
// fizzbuzz

const fizzBuz = n => {
  for (let i = 1; i <= n; i++) {
    if (i % 5 === 0 && i % 3 === 0) {
      console.log('fizzbuzz');
    } else if (i % 3 === 0) {
      console.log('fizz');
    } else if (i % 5 === 0) {
      console.log('buzz');
    } else {
      console.log(i);
    }
  }
};

module.exports = fizzBuz;
