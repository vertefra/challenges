// const fib = n => {
//   const res = [0, 1]

//   for (let i = 2; i <= n; i++) {
//     const a = res[i - 2]
//     const b = res[i - 1]

//     res.push(a + b)
//   }

//   return res[n]
// }

let fib = n => {
  if (n < 2) {
    return n
  }
  // when you call a memoized function recursively make sure that it's calling the memoized version
  // so the return statement should refer to line 23 memoized version of the function
  return fib(n - 1) + fib(n - 2)
}

fib = memoize(fib)


// Fibonacci solution is vvery bad for time complexity
// Memoization

function memoize(fn){
  const cache = {}

  return (...args) => {
    
    if (cache[args]){
      return cache[args]
    }

    const result = fn.apply(this, args)
    cache[args] = result

    return result
  }
}



module.exports = fib
