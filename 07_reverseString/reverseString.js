const reverseString = function(string) {
    let output = "";
    const myArray = string.split("");
    for( i =myArray.length - 1; i >= 0;i--){
        
        output += myArray[i]
    }
        return output

};
console.log(reverseString("helloworld"))
// Do not edit below this line
module.exports = reverseString;
