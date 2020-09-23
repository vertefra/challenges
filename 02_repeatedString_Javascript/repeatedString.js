const repeatedString = (s, n) => {
  const mul = Math.floor(n / s.length);
  const rem = n % s.length;
  // counting how many 'a' in substring
  let nOfA = 0;
  s.split("").forEach((l) => {
    l === "a" ? nOfA++ : null;
  });

  // counting how many a in an eventual remainer
  let nOfAInR = 0;
  s.split("")
    .splice(0, rem)
    .forEach((l) => {
      l === "a" ? nOfAInR++ : null;
    });
  return mul * nOfA + nOfAInR;
};

module.exports = repeatedString;
