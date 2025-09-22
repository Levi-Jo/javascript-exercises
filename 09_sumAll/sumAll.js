const sumAll = function(num1,num2) {
let output = 0

if (typeof num1 === "number" && 
    typeof num2 === "number" &&
    num1>=0 &&
    num2>=0 &&
    Number.isInteger(num1) &&
    Number.isInteger(num2) ){
  
   for (let i = Math.min(num1,num2); i <= Math.max(num1,num2); i++)
   output += i
}else{
    output = "ERROR"
}
    return output

};
console.log(sumAll(23,213))
// Do not edit below this line
module.exports = sumAll;
