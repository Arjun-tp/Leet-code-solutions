/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
var merge = function (nums1, m, nums2, n) {
    if (m !== 0) {
        nums1.splice(m, nums1.length - m)
    } else {
        nums1.splice(0)
    }
    nums2 = nums2.slice(0, n);

    nums2.forEach((num) => {
        nums1.splice(m, 0, num)
    })

    nums1.sort((a,b) => a-b)
};

// Example
// merge([1,2,3,0,0,0],3,[2,5,6],3)
