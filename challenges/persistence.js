function binaryOutput(arr) {
    var binaryAnswer = 0;

    for (var i = 0; i < arr.length; i++) {
        // console.log(arr[i])
        // console.log(arr[0])
        // console.log(arr[1])
        // console.log(arr[2])
        // console.log(arr[3])

        if (arr[i] === 1) {
            binaryAnswer += 1;
            console.log(binaryAnswer)

            // } else if (arr[2] === 1) {
            //     binaryAnswer += 2;

            // } else if (arr[1] === 1) {
            //     binaryAnswer += 4;
            // } else if (arr[0] === 1) {
            //     binaryAnswer += 8
        }


    }



}

binaryOutput([1, 0, 0, 0])