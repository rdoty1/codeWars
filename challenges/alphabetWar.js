function alphabetWar(string) {
    var fight = string.split("");

    var leftScore = 0;
    var rightScore = 0;

    for (var i = 0; i <= string.length; i++) {

        if (fight[i] === "w") {
            leftScore += 4;
        } else if (fight[i] === "p") {
            leftScore += 3;

        } else if (fight[i] === "b") {
            leftScore += 2;
        } else if (fight[i] === "s") {
            leftScore += 1;
        } else if (fight[i] === "m") {
            rightScore += 4;
        } else if (fight[i] === "q") {
            rightScore += 3;

        } else if (fight[i] === "d") {
            rightScore += 2;
        } else if (fight[i] === "z") {
            rightScore += 1;
        }



    }
    if (rightScore > leftScore) {
        console.log("Right side wins!");
    } else if (leftScore > rightScore) {
        console.log("Left side wins!");
    } else {
        console.log("Let's fight again!")
    }








}

alphabetWar("zdqmwpbs")
alphabetWar("z")
alphabetWar("zdqmwpbs")
alphabetWar("wwwwww")