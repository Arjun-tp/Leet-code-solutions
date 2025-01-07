/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function (s) {
    let stringInput = s.split('')
    let regex = /([\W_])|(\s)/g;
    for (let i = 0; i <= stringInput.length; i++) {
        if (stringInput[i]?.match(regex)) {
            stringInput.splice(i, 1)
        }
    }
    s = stringInput.join('').replace(regex, "").toLowerCase();
    let reverse = s.split('').reverse().join('');
    if (s !== reverse) {
        return false
    }
    return true
};

/*
Example
isPalindrome("A man, a plan, a canal: Panama")
*/
