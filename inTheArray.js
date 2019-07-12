function arrayChecker(arr, str) {
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] === str) {
            return arr[i]
        } else {
            console.log("not the same")
        }
    }
}

console.log(arrayChecker(["ayye", "how are you doing", "my name is ryan", "hello"], "hello"))