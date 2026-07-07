var reduce = function(nums, fn, init) {
  let res = init
  for (let num of nums) {
    res = fn(res, num)
  }
  return res
}

console.log(reduce([1, 2, 3], function sum(accum, curr) {
  return accum + curr * curr
}, 100))
