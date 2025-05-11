var map = function(arr, fn) {
    let newArr = []

    for (let i = 0; i < arr.length; i++) {
        let aux = fn(i)
        newArr[i] = aux
    }
};