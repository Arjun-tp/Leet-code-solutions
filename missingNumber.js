/**
 * @param {number[]} nums
 * @return {number}
 */
var missingNumber = function (nums) {
    nums = nums.sort((a, b) => a - b)
    for (let i = 0; i <= nums.length - 1; i++) {
        if (nums[nums.length - 1] !== nums.length) {
            return nums.length
        }
        if (i !== nums[i]) {
            return i
        }
    }
};



// Example 1:
// Input: nums = [3,0,1]
// Output: 2
// Explanation:
// n = 3 since there are 3 numbers, so all numbers are in the range [0,3]. 2 is the missing number in the range since it does not appear in nums.

// Example 2:
// Input: nums = [0,1]
// Output: 2
// Explanation:
// n = 2 since there are 2 numbers, so all numbers are in the range [0,2]. 2 is the missing number in the range since it does not appear in nums.

