function wordReverse(str) {
    var backwards = '';

    for (var i = str.length - 1; i >= 0; i--) {
        backwards += str[i];



    }

    if (backwards === str) {
        return true;
    } else {
        return false;
    }


}
console.log(wordReverse("racecar"))



// function isPalindrome(str) {

// }