const pyramid = n => {
  const line = initLine(n);

  const medianIndex = Math.floor(line.length / 2);
  let inc = 0;

  for (let step = 1; step <= n; step++) {
    for (let idx = 0; idx < line.length; idx++) {
      if (idx >= medianIndex - inc && idx <= medianIndex + inc) {
        line[idx] = '#';
      }
    }
    console.log(line.join(''));
    inc++;
  }
};

const initLine = n => {
  const line = [];

  let width;

  if (n === 1) {
    width = 1;
  } else {
    width = n * 2 - 1;
  }

  for (let i = 1; i <= width; i++) {
    line.push(' ');
  }
  return line;
};

module.exports = pyramid;
