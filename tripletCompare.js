function compareTriplets(a, b) {
    var aliceScore = 0;
    var bobScore = 0;
    for (var i = 0; i < a.length; i++) {
        if (a[i] > b[i]) {
            aliceScore++
        } else if (a[i] < b[i]) {
            bobScore++
        } else if (a[i] === b[i]) {
            bobScore += 0;
            aliceScore += 0;
        }

    }
    return ([aliceScore, bobScore])




}

console.log(compareTriplets([17, 28, 30], [99, 16, 8]))