/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function (s) {
    let words = s.split('').reverse().join('').split(' ')
    return words.filter(word => word!== "")[0].length;
};

/*
Example
lengthOfLastWord("luffy is still joyboy")
*/
