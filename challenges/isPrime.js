function isPrime(num) {

    if (num === 0) {
        return false;

    }

    for (var i = 2; i < num; i++) {

        if (num % i === 0) {
            return false;
        }
    }
    return true;
}

console.log(isPrime(22));