var argumentsLength = function(...args) {
    let amount = 0
    for (let arg in args) {
        amount += 1
    }
    return amount
};