const removeDuplicates = function(nums) {
  if (nums.length === 0) return []

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === nums[i + 1]) {
      nums.splice(i, 1)
      i--
    }
  }
  return nums.length
}

console.log(removeDuplicates([1,1,2]))
