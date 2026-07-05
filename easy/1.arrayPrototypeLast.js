// Write code that enhances all arrays such that you can call the array.last() method on any array and it will return the last element. If there are no elements in the array, it should return -1.
//
// You may assume the array is the output of JSON.parse.
//
//  
//
// Example 1:
//
// Input: nums = [null, {}, 3]
// Output: 3
// Explanation: Calling nums.last() should return the last element: 3.
// Example 2:
//
// Input: nums = []
// Output: -1
// Explanation: Because there are no elements, return -1.

// Array.prototype.last = function() {
//   const last = this.at(-1)
//   if (last) {
//     return last
//   } else if (last === null) {
//     return null
//   } else if (last === 0) {
//     return 0
//   } else {
//     return -1
//   }
// }

Array.prototype.last = function() {
  return this.length === 0 ? -1 : this[this.length - 1]
}

const nums = [null, 0, 3, {}]
console.log(nums.last())
