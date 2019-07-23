function TripleDouble(num1, num2) {
    var number1 = num1.toString();
    var number2 = num2.toString();
    var num1Check;
    var num2Check;

    for (var i = 0; i < number1.length; i++) {


        if (number1[i] === number1[i + 1] && number1[i] === number1[i + 2]) {
            num1Check = "true";

        }


    }

    for (var i = 0; i < number2.length; i++) {
        if (number2[i] === number2[i + 1]) {
            num2Check = "true"


        }


    }

    if (num1Check === num2Check) {

        return 1
    } else {
        return 0
    }

}

console.log(TripleDouble(12344422312, 12232133332123221));