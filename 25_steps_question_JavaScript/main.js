const steps = (n, idx = 0) => {
  if (idx === n) {
    return undefined;
  } else {
    let buf = '';
    for (i = 0; i < n; i++) {
      if (i <= idx) {
        buf += '#';
      } else {
        buf += ' ';
      }
    }
    console.log(buf);
  }
  steps(n, idx + 1);
};

// const steps = n => {
//   const line = initLine(n);

//   for (let i = 0; i < n; i++) {
//     line[i] = '#';
//     const str = line.join('');
//     console.log(str);
//   }
// };

// const initLine = n => {
//   const backArr = [];
//   for (let i = 1; i <= n; i++) {
//     backArr.push(' ');
//   }

//   return backArr;
// };

module.exports = steps;
