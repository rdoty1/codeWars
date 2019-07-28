function LongestWord(sen) {

    //creating an array of words from sen.split;
    var arr = sen.split(' ');
    console.log(arr);

    //iterating through the array by 1

    for (var i = 0; i < arr.length; i++) {

        //if arr [i] is greater then arr[i +1] return arr[i] --> if first is greater then second keep first 

        if (arr[i] > arr[i + 1]) {
            return arr[i];
            console.log[arr[i]]
        } else { //else return arr[i +1];
            return arr[i + 1]

        }

    }
    // code goes here  
    //return sen; 

}

// keep this function call here 
LongestWord("hello my name is ryan");