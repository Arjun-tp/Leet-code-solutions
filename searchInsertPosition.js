/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function (nums, target) {
    let findElementIndex = nums.findIndex(element => element === target);
    if (findElementIndex > 0) {
        return findElementIndex
    } else {
        nums.push(target)
        return nums.sort((a, b) => a - b).findIndex(element => element === target)
    }
};


/*
Example 1:

Input: nums = [1,3,5,6], target = 5
Output: 2
Example 2:

Input: nums = [1,3,5,6], target = 2
Output: 1
Example 3:

Input: nums = [1,3,5,6], target = 7
Output: 4*/
