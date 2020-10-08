// triplet i, j, k

const arr = [1, 3, 9, 9, 27, 81];
const r = 3;

const countTriplets = (arr, r) => {
  const triplets = [];
  let idx = 0;
  for (let j of arr) {
    console.log(j);
    const i = j / r;
    const k = j * r;
    let next = undefined;
    let prev = undefined;
    if (idx > 0 || idx < arr.length) {
      next = arr[idx + 1];
      prev = arr[idx - 1];
      if (next === k && prev === i) {
        const triplet = { i, j, k };
        console.log(triplet);
      }
    }
    idx++;
  }
  // console.log(triplets);
};

console.log(countTriplets(arr, r));
