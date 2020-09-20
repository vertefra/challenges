// final array [ 2, 1, 5, 3, 4] expected 3

const minimumBribes = (a, swaps = 0) => {
  let swapped = false;
  for (let i in a) {
    if (a[i] - 1 - i > 2) {
      console.log("Too chaotic");
      return;
    }
    if (a[i] > a[parseInt(i) + 1]) {
      t = a[i];
      a[i] = a[parseInt(i) + 1];
      a[parseInt(i) + 1] = t;
      swapped = true;
      swaps++;
    }
  }
  if (swapped === true) {
    minimumBribes(a, swaps);
  } else {
    console.log(swaps);
  }
};

module.exports = minimumBribes;
