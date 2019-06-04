function letterCapitalize(str) {
    // took the string a split it into an array while lowercasing everything 
    var words = str.toLowerCase().split(' ');

    // created for loop to iterate through words array
    for (var i = 0; i < words.length; i++) {

        //going through each word, taking the character at 0 index of each words[i], capitalizing it, and using substring to iisolate it 
        words[i] = words[i].charAt(0).toUpperCase() + words[i].substring(1);



    }

    //ultimately returning my newly capitalized words and joinging them

    return words.join(' ')

}

console.log(letterCapitalize("Hello my name is ryan"));