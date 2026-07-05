// Given an integer n, return a counter function. This counter function initially returns n and then returns 1 more than the previous value every subsequent time it is called (n, n + 1, n + 2, etc).
//
//  
//
// Example 1:
//
// Input: 
// n = 10 
// ["call","call","call"]
// Output: [10,11,12]
// Explanation: 
// counter() = 10 // The first time counter() is called, it returns n.
// counter() = 11 // Returns 1 more than the previous time.
// counter() = 12 // Returns 1 more than the previous time.
// Example 2:
//
// Input: 
// n = -2
// ["call","call","call","call","call"]
// Output: [-2,-1,0,1,2]
// Explanation: counter() initially returns -2. Then increases after each sebsequent call.

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
