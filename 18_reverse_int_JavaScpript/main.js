// given an integer return an integer that is the reverse ordering number
//
// reverseInt(15) === 51
// reverseInt(542) === 245

const reverseInt = (n) => {
    const sign = Math.sign(n) === -1 ? '-' : '+'
    return parseInt(sign+n.toString().split('').reverse().join(''))
}

module.exports = reverseInt