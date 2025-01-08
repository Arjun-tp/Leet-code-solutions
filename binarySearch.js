
var binarySearch = function (arr, target) {
    console.log('arr: ', arr, " target: ", target)
    let start = 0;
    let end = arr.length - 1

    while (start <= end) {
        let mid = Math.ceil((start + end) / 2)
        if (target === arr[mid]) {
            return mid
        }
        if (target <= arr[mid]) {
            end = mid - 1
        }
        else {
            start = mid + 1
        }
    }
    return -1

};


console.log(binarySearch([-5, 3, 6, 7, 9], 9))
console.log(binarySearch([-5, 3, 6, 7, 9], 3))
console.log(binarySearch([-5, 3, 6, 7, 9], 44))