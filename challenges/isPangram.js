function panagram(str) {
    var sentence = str.split('')
    console.log(sentence)
    var alphabet = 'abcdefghijklmnopqrstuvwxyz'.split('');
    for (var i = 0; i < alphabet.length; i++) {
        var letters = alphabet[i];
        console.log(letters)
        if (letters === sentence) {
            console.log("is Panagram")
        }
    }

}

function isPangram(str) {
    if (str.length < 26) {
        return false;
    }

    //iterate around str
    var letterHolder = [];

    for (var i = 0; i < str.length; i++) {
        var currentChar = str[i].toLowerCase();
        if (currentChar !== ' ') {
            if (!letterHolder.includes(str[i])) {
                letterHolder.push(str[i]);

            }



        }

    }

    if (letterHolder.length === 26) {
        return true;
    } else {
        return false;
    }
}

console.log(isPangram("The quick brown fox jumps over the lazy dog"));


//ALGORITHIM 

// 1. Check to seee if the string has length less than 26, if it DOMSettableTokenList, return false.valueOf
// 2. Read each character of our string and store each unique character in a DataTransferItem.length
// 3. If our dataset has a length equal to 26, return true, if Notification, return false.