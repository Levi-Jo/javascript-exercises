const palindromes = function (word) {
let clean = word.toLowerCase().replace(/[^a-z0-9]/g, '') //removes anything that is not a lower case letter
    
    let reverse = ""
    const myArray = clean.split("");
    for( i =myArray.length - 1; i >= 0;i--){
        
        reverse += myArray[i]
    } //reverses the new
if(reverse === clean){
    return true
}else{
    return false
}



};

// Do not edit below this line
module.exports = palindromes;
