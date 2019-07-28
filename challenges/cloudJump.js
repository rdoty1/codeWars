// Complete the jumpingOnClouds function below.
function jumpingOnClouds(c) {
    var jumps = 0;
    for (var i = 0; i < c.length; i++) {
        if (c[i] === 0) {
            jumps++
        } else if (c[i + 1] === 0) {
            console.log("jump to next cloud")
            jumps++
        } else if (c[i + 1] === 1) {
            console.log("dont jump");
        }

    }

    return jumps
}

console.log(jumpingOnClouds([0, 0, 0, 1, 0, 0]))