function countingValleys(n, s) {
    var eachStep = s.split('');
    var counter = 0;
    var seaLevel = 0;


    for (var i = 0; i < eachStep.length; i++) {
        if (eachStep[i] === "U") {
            counter++
        } else if (eachStep[i] === "D") {
            counter--
        }
        console.log(counter)

        if (counter === seaLevel) {
            seaLevel++;
            console.log("valley")
        }


    }

}

console.log(countingValleys(8, "UDDDUDUU"));