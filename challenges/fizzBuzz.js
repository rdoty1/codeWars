function fizzBuzz() {

    for (var i = 1; i <= 100; i++) {

        if (i % 3 === 0 && i % 5 === 0) {
            console.log("fizzBuzz")
        } else if (i % 3 === 0) {
            console.log("Fizz");
        } else if (i % 5 === 0) {
            console.log("buzz");
        } else {
            console.log(i)
        }
    }
}

fizzBuzz();