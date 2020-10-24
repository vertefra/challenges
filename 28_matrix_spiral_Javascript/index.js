const matrix = n => {
  const matrix = initMatrix(n);

  let startRow = 0;
  let endRow = n - 1;

  let startColumn = 0;
  let endColumn = n - 1;

  let value = 1;

  while (startRow <= endRow && startColumn <= endColumn) {
    // Top matrix

    for (let i = startColumn; i <= endColumn; i++) {
      matrix[startRow][i] = value;
      value++;
    }

    startRow++;

    // Right matrix

    for (let j = startRow; j <= endRow; j++) {
      matrix[j][endColumn] = value;
      value++;
    }

    endColumn--;

    // bottom matrix

    for (let i = endColumn; i >= startColumn; i--) {
      matrix[endRow][i] = value;
      value++;
    }

    endRow--;
    // left matrix

    for (let j = endRow; j >= startRow; j--) {
      console.log(j, startColumn);
      matrix[j][startColumn] = value;
      value++;
    }

    startColumn++;
  }

  return matrix;
};

const initMatrix = n => {
  const matrix = [];
  for (let i = 0; i < n; i++) {
    const line = [];
    for (let j = 0; j < n; j++) {
      line.push(0);
    }
    matrix.push(line);
  }
  return matrix;
};

console.log(matrix(5));

module.exports = matrix;
