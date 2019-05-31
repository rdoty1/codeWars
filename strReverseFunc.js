function FirstReverse(str) {
    var arr = str.split('');
    arr.reverse();
    return arr.join('')

}

function FirstReverse(str) {

    let newString = '';
    for (let i = str.length - 1; i >= 0; i--) {
        newString += str[i];
    }

    return newString;
}