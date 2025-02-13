/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */
var containsNearbyDuplicate = function (nums, k) {
    let numMap = new Map()
    for (let i = 0; i <= nums.length - 1; i++) {
        if (numMap.has(nums[i])) {
            if (Math.abs(i - numMap.get(nums[i])) <= k) {
                return true
            }
        }
        numMap.set(nums[i], i)
    }
    return false
}


/*
Given an integer array nums and an integer k, return true if there are two distinct indices i and j in the array such that nums[i] == nums[j] and abs(i - j) <= k.

Example 1:
Input: nums = [1,2,3,1], k = 3
Output: true

Example 2:
Input: nums = [1,0,1,1], k = 1
Output: true

Example 3:
Input: nums = [1,2,3,1,2,3], k = 2
Output: false
*/
