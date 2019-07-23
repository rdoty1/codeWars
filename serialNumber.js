function SerialNumber(str) {
    var digits = str.split('');
    var firstSetGreater;
    var firstCounter;
    var secondCounter;

    if (digits.length !== 11) {
        return false;
    } else {
        firstSet();
        secondSet();
        lastSet();

        if (firstSet() === true && secondSet() === true && lastSet() === true) {

            return true;
        } else {
            return false;
        }



    }

    console.log(firstSet());
    console.log(secondSet());
    console.log(lastSet());




    function firstSet() {

        for (var i = 0; i < digits.length; i++) {

            firstCounter = parseInt(digits[0]) + parseInt(digits[1]) + parseInt(digits[2])
            console.log(firstCounter);

            if (parseInt(digits[2]) > parseInt(digits[1]) && parseInt(digits[2]) > parseInt(digits[0])) {

                if (firstCounter % 2 === 0) {
                    return true;
                } else {
                    return false;
                }



            } else {
                return false;
            }
        }
    }


    function secondSet() {

        for (var i = 0; i < digits.length; i++) {

            secondCounter = parseInt(digits[4]) + parseInt(digits[5]) + parseInt(digits[6])


            if (parseInt(digits[6]) > parseInt(digits[5]) && parseInt(digits[6]) > parseInt(digits[4])) {

                if (secondCounter % 2 !== 0) {
                    return true;
                } else {
                    return false
                }



            } else {
                return false;
            }


        }
    }

    function lastSet() {
        for (var i = 0; i < digits.length; i++) {
            if (parseInt(digits[10]) > parseInt(digits[9]) && parseInt(digits[10]) > parseInt(digits[8])) {

                return true;

            } else {
                return false

            }
        }
    }

}
console.log(SerialNumber("999.111.222"))