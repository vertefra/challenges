// given an integer return an integer that is the reverse ordering number
//
// reverseInt(15) === 51
// reverseInt(542) === 245

const reverseInt = (n) => {
    return parseInt(n.toString().split('').reverse().join(''))
}

module.exports = reverseInt