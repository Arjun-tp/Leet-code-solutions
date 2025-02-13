/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function (n) {
    let first = 0, second = 1, sum = 0;
    for (let i = 1; i <= n; i++) {
        sum = first + second
        first = second
        second = sum
    }
    return sum
};


// Example 1:
// Input: n = 2
// Output: 2
// Explanation: There are two ways to climb to the top.
// 1. 1 step + 1 step
// 2. 2 steps

// Example 2:
// Input: n = 3
// Output: 3
// Explanation: There are three ways to climb to the top.
// 1. 1 step + 1 step + 1 step
// 2. 1 step + 2 steps
// 3. 2 steps + 1 step