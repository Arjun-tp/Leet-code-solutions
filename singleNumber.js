/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function (nums) {
    nums = nums.sort((a, b) => a - b)
    for (let i = 0; i <= nums.length; i += 2) {
        if (nums[i] !== nums[i + 1]) {
            return nums[i]
        }
    }
};

/*
Example 1:

Input: nums = [2,2,1]
Output: 1
Example 2:

Input: nums = [4,1,2,1,2]
Output: 4
Example 3:

Input: nums = [1]
Output: 1*/
