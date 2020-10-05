// hello

// world

const twoStrings = (s1, s2) => {
  const set1 = new Set(s1.split(""));
  const set2 = new Set(s2.split(""));
  for (let val of set1) {
    if (set2.has(val)) {
      return "YES";
    }
  }
  return "NO";
};
