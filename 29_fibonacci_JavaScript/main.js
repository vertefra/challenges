const fib = n => {
  const res = [0, 1]

  for (let i = 2; i <= n; i++) {
    const a = res[i - 2]
    const b = res[i - 1]

    res.push(a + b)
  }

  return res[n]
}
module.exports = fib
