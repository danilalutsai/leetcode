const twoSum = function(nums, target) {
  for (let i = 0; i < nums.length; i++) {
    const j = nums.findIndex((num, idx) => num === target - nums[i] && idx !== i)
    if (j !== -1) {
      return [i, j]
    }
  }
}

console.log(twoSum([3,2,4], 6))
