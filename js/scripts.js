const arr = [1, 2, 3, -1, -2, -3];
function arrChange(currentPositiveNumber) {
    const exampleArr = [];
    if (currentPositiveNumber.length == 0) {
        return "Массив пустой"
    }
    for (let a = 0; a < currentPositiveNumber.length; a++) {
        if (currentPositiveNumber[a] > 0) {
            exampleArr.push(currentPositiveNumber[a])
        }
    }
    if (exampleArr.length != 0) {
        return exampleArr
    } else {
        return null
    }
}
console.log(arrChange(arr))