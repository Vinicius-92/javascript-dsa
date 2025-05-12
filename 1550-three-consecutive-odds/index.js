var threeConsecutiveOdds = function(arr) {
    if (arr.length < 3) return false 
    
    let left = 0
    let right = 1

    while (right <= arr.length) {
        if (!isOdd(arr, left)) {
            [left, right] = getNextTuple(left, right)
            continue
        }
        if(!isOdd(arr, right)) {
            [left, right] = getNextTuple(left, right)
            continue
        }
        if (right < arr.length && isOdd(arr, right + 1)) {
            return true
        } else {
            [left, right] = getNextTuple(left, right)
            continue
        }
    }

    return false;
}

function getNextTuple(left, right) {
    left = right
    right += 1
    return [left, right]
}

function isOdd(arr, index) {
    return arr[index + 1] % 2 > 0
}

let testTrue = [1,2,34,3,4,5,7,23,12]
let testFalse = [1,2,34,3,4,5,7,22,11]
let edgeCase = [1,2,1,1]


console.log("true: " + threeConsecutiveOdds(testTrue))
console.log("false: " + threeConsecutiveOdds(testFalse))
console.log("false: " + threeConsecutiveOdds(edgeCase))