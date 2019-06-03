function letterChanges(str) {
    //split string
    var stringLetter = str.split('');
    //created alphabet array 
    var alphabet = 'abcdefghijklmnopqrstuvwxyz'.split('');
    var returnStr = [];

    for (var i = 0; i < stringLetter.length; i++) {

        for (var j = 0; j < alphabet.length; j++) {

            if (alphabet[j] === stringLetter[i]) {
                returnStr.push(alphabet[j + 1]);
                //returnStr.toString();
                //returnStr.join('');
                //console.log(returnStr);
            }
        }
    }

    console.log(returnStr.toString(''));






}


letterChanges("fun times!")