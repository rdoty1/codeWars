function SymmetricTree(strArr) {
    var firstBranch;
    var secondBranch;
    //iterate through the array

    for (var i = 0; i < strArr.length; i++) {


        if (strArr[1] === strArr[2]) {
            // console.log("first branch equal")
            firstBranch = "true";
        } else {
            firstBranch = "false";
        };

        if (strArr[3] === strArr[4] && strArr[3] === strArr[5] && strArr[3] === strArr[6]) {

            secondBranch = "true";
        } else if (strArr[3] === strArr[6] && strArr[4] === strArr[5]) {
            secondBranch = "true";

        } else {
            secondBranch = "false"
        }


        if (firstBranch === "true" && secondBranch === "true") {
            strArr = true;
            return strArr;
        } else {
            strArr = false;
            return strArr;
        };

    }
}


console.log(SymmetricTree(["2", "3", "4"]))