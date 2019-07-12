function vowelCounter(str) {
    var letters = str.split('');
    var numVowels = 0;
    for (var i = 0; i < letters.length; i++) {

        if (letters[i] === "a" || letters[i] === "e" || letters[i] === "i" || letters[i] === "o" || letters[i] === "u" || letters[i] === "y") {
            numVowels += 1;
        }

    }
    console.log(numVowels)
}

vowelCounter("hello my name is ryan")