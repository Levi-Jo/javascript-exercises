const fibonacci = function(num) {
    let output
    let fibonacciArray = []
    if (num < 0) return "OOPS";
    if (num == 0) return 0;
    
    
for(let i =0; i< num; i++){
    if(i>=2){ fibonacciArray.push(fibonacciArray[i-2] + fibonacciArray[i-1])

    }else{
        fibonacciArray.push(1)
    }
}
output = fibonacciArray [num - 1]
    
return output;
    
};

// Do not edit below this line
module.exports = fibonacci;
// need a for loop that builds the array up until the array length - 1 = input
// to build the array each loop needs to add the previos 2 entries except the first 2 as they have to both be 1
// then searching the array using the input number
//