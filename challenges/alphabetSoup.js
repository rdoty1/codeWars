function AlphabetSoup(str) {

    var arrays = str.split("");
    console.log(arrays)
    var reversearrays = arrays.sort();
    console.log(reversearrays)
    var result = reversearrays.join("");
    console.log(result)


    return result;

}

console.log(AlphabetSoup("hey how are you doing today"))