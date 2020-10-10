const palindrome = (string) => {
  return (
    string ===
    string.split("").reduce((acc, letter) => {
      return (acc = letter + acc);
    }, "")
  );
};

module.exports = palindrome;
