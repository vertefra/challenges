const d = 5; // days used to calculate the median
const n = [2, 3, 4, 2, 3, 6, 8, 4, 5];

const median = n => {
  const numbers = [...n];
  numbers.sort((a, b) => a - b);
  if (numbers.length % 2 !== 0) {
    return numbers[Math.floor(numbers.length / 2)];
  } else {
    const n = numbers.length / 2;
    const n2 = n - 1;
    return (numbers[n] + numbers[n2]) / 2;
  }
};

function activityNotifications(expenditure, d) {
  let notifications = 0;
  let currDay = 1;
  for (let exp of expenditure) {
    if (!(currDay <= d)) {
      const days = expenditure.slice(currDay - 1 - d, currDay - 1);
      const m = median(days);
      console.log('calc median on slice ', days);
      console.log(`median for exp ${exp} is ${m}`);
      exp >= 2 * m ? notifications++ : null;
    }
    currDay++;
  }
  return notifications;
}

const b = activityNotifications(n, d);
console.log(b);

module.exports = activityNotifications;
