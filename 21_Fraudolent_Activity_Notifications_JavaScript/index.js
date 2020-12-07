const d = 5; // days used to calculate the median
const n = [10, 20, 30, 40, 50];

const median = (n) => {
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

// console.log(median([3, 4, 7, 3, 2])); // => 2, 3, 3, 4, 7 => median 3
// console.log(median([2, 4, 3, 5])); // 2, 3, 4, 5 => (3+4) /2 => median 3.5

// d = trailing days to calculate the median
// expenditures = array with integer repr. expenditure values

// receive a notification if current expense is >= to 2 x the current expenditures median value

function activityNotifications(expenditure, d) {
	let trailingExpenditures = expenditure.splice(0, d);

	let notifications = 0;
	for (let currentExp of expenditure) {
		let currentMedian = median(trailingExpenditures);
		if (currentExp >= currentMedian * 2) {
			notifications++;
		}
		trailingExpenditures.shift();
		trailingExpenditures.push(currentExp);
	}

	return notifications;
}

console.log(activityNotifications(n, 3));

// module.exports = activityNotifications;
