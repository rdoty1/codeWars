function meanMode(arr) {
    var mean = 0;
    var totalTimes = 0

    var mode = 0;
    for (var i = 0; i < arr.length; i++) {

        console.log(arr[i])

        mean += arr[i];

        totalTimes += i;


        if (arr[i] === arr[i + 1]) {
            console.log("duplicate")

        }




    }

    var finalMean = mean / totalTimes
    console.log("final mean: " + finalMean)


}


meanMode([1, 1, 2, 3])