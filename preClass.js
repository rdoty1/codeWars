function highestNum(arr) {
    var max = arr[0];

    for (var i = 1; i <= arr.length; i++) {

        if (max < arr[i]) {
            max = arr[i];
        }


    }
    return max;


}


console.log(highestNum([1, 2, 10, 4, 5, 6]))