function doubleArr(arr) {
    var empty = [];
    for (var i = 0; i < arr.length; i++) {
        var doubled = arr[i] * 2;
        empty.push(doubled);

    }
    console.log(empty)
}

doubleArr([1, 2, 3])