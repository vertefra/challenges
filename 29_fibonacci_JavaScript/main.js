// const fib = n => {
//   const res = [0, 1]

//   for (let i = 2; i <= n; i++) {
//     const a = res[i - 2]
//     const b = res[i - 1]

//     res.push(a + b)
//   }

//   return res[n]
// }

const fib = n => {
  if (n < 2) {
    return n
  }

  return fib(n - 1) + fib(n - 2)
}
module.exports = fib
