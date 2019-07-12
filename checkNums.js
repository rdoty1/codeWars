function checkNums(num1, num2) {
    if (num2 > num1) {
        var truth = "true"
        return truth;
    } else if (num1 === num2) {
        var neg = "-1"
        return neg

    } else {
        var falsee = "false"
        return falsee

    }
}

console.log(checkNums(14, 1))