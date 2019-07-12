function ExOh(str) {
    var letters = str.split('');
    var xCounter = 0;
    var oCounter = 0;

    for (var i = 0; i < letters.length; i++) {
        if (letters[i] === "x") {
            xCounter += 1;
        } else if (letters[i] === "o") {
            oCounter += 1;
        }
    }

    if (xCounter === oCounter) {
        return true;
    } else if (xCounter !== oCounter) {
        return false;
    }


}

console.log(ExOh("oxoxoxoxoxx"));