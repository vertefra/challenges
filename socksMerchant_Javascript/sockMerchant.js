const socks = (n, ar) => {
  const pairs = {};
  ar.forEach((sock) => {
    if (Object.keys(pairs).includes(sock.toString())) {
      pairs[sock] = parseInt(pairs[sock]) + 1;
    } else {
      pairs[sock] = 1;
    }
  });
  let totPairs = 0;
  Object.keys(pairs).forEach((key) => {
    totPairs += Math.floor(pairs[key] / 2);
  });
  return totPairs;
};

module.exports = socks;
