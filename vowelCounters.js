function VowelCount(str) {
    var letters = str.split('');
    var vowelCounter = 0;


    for (var i = 0; i < letters.length; i++) {
        if (letters[i] === "a" || letters[i] === "e" || letters[i] === "i" || letters[i] === "o" || letters[i] === "u") {
            vowelCounter += 1;
        }
    }
    return vowelCounter;
}


console.log(VowelCount("hello my name is ryan"));