/*
Example 1:

Input: s = "the sky is blue"
Output: "blue is sky the"

Example 2:

Input: s = "  hello world  "
Output: "world hello"
Explanation: Your reversed string should not contain leading or trailing spaces.

Example 3:

Input: s = "a good   example"
Output: "example good a"
Explanation: You need to reduce multiple spaces between two words to a single space in the reversed string.
*/

/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function(s) {
    let splitString = s.split(' ').reverse();
    for(let i=0;i<splitString.length;i++){
        if(splitString[i] === ''){
            splitString.splice(i,1)
            i--
        }
    }
    return splitString.join(' ')
};


// Example
// reverseWords("the sky is blue")
