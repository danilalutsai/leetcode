const searchInsert = function(nums, target) {
    let left = 0;
    let right = nums.length - 1;

    while (left <= right) {
      const middle = Math.floor((left + right) / 2);

      if (nums[middle] === target) {
        return middle;
      }

      if (nums[middle] < target) {
        left = middle + 1;
      } else {
        right = middle - 1;
      }
    }

    return left;
  };

console.log(searchInsert([1,1,2,2,4,5,5], 3))
