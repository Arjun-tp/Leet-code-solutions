/**
 * @param {string} s
 * @return {boolean}
 */
var areOccurrencesEqual = function (s) {
    let mapHere = new Map()
    let splitArray = s.split('')
    for (let i = 0; i <= splitArray.length - 1; i++) {
        let counter = 0
        for (let j = 0; j <= splitArray.length - 1; j++) {
            if (splitArray[i] == splitArray[j]) {
                counter += 1
                mapHere.set(splitArray[i], counter)
            }
        }
    }
    let setHere = new Set(mapHere.values())
    if (setHere.size > 1) {
        return false
    } else {
        return true
    }
};

/*
Example 1:
    Input: s = "abacbc"
    Output: true
    Explanation: The characters that appear in s are 'a', 'b', and 'c'. All characters occur 2 times in s.
    
Example 2:
    Input: s = "aaabb"
    Output: false
    Explanation: The characters that appear in s are 'a' and 'b'.
    'a' occurs 3 times while 'b' occurs 2 times, which is not the same number of times.
*/