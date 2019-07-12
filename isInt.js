var isInt = function(num) {

    if (Math.floor(num) !== num) {
        console.log("not an integer")
    } else if (num % 1 !== 0) {
        console.log("not an integer")
    } else {
        console.log("is an integer")
    }
}

isInt(7)