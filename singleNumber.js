function singleNumber(arr) {
    for (var i = 0; i <= arr.length; i++) {
        console.log("arr i = " + arr[i]);


        for (var j = 0; j < arr.length; j++) {

            console.log("arr j = " + arr[j]);

        }
    }

}

singleNumber([1, 2, 2, 2, 3, 4, 5, 6, 7])