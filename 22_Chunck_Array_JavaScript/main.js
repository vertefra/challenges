// Given an array and chunch size, divide the array into many subarrays
// where each subarray is of length size

// chunck([1,2,3,4,5],2) --> [[1,2],[3,4],[5]]

const chunk = (array, size) => {
  const res = [];
  let chunck = [];
  let idx = 0;
  for (let val of array) {
    chunck.push(val);

    if (chunck.length === size || idx === array.length - 1) {
      res.push(chunck);
      chunck = [];
    }
    idx++;
  }
  return res;
};

module.exports = chunk;
