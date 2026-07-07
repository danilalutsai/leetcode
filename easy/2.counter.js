let createCounter = function(n) {
  return function() {
    return n++
  }
}

let counter = createCounter(10)
console.log(counter())

console.log(createCounter(10)())

// Because n++ is the post-increment operator. It returns the current value of n before incrementing.
// call 1: n=10 → returns 10, then n becomes 11
// call 2: n=11 → returns 11, then n becomes 12
// call 3: n=12 → returns 12, then n becomes 13
// If you used ++n (pre-increment) instead, it would increment first:
// call 1: n=10 → n becomes 11, returns 11
