const steps = n => {
  const line = initLine(n);

  for (let i = 0; i < n; i++) {
    line[i] = '#';
    const str = line.join('');
    console.log(str);
  }
};

const initLine = n => {
  const backArr = [];
  for (let i = 1; i <= n; i++) {
    backArr.push(' ');
  }

  return backArr;
};

module.exports = steps;
