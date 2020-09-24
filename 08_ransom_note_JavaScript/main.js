const magazine = ["give", "me", "one", "grand", "today", "night"];
const notes = ["give", "one", "grand", "t"];

const checkMagazine = (magazine, notes) => {
  const magazineObj = {};
  magazine.forEach((word) => {
    if (magazineObj[word]) {
      magazineObj[word]++;
    } else {
      magazineObj[word] = 1;
    }
  });
  for (note of notes) {
    if (magazineObj[note] !== undefined && magazineObj[note] > 0) {
      console.log(note, magazineObj[note]);
      magazineObj[note]--;
    } else {
      return "No";
    }
  }
  return "Yes";
};

const value = checkMagazine(magazine, notes);
console.log(value);
