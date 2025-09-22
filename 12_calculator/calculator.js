const add = function(num1, num2) {
	let output = num1 +num2
  return output
};

const subtract = function(num1, num2) {
  let output = num1- num2
  return output
	
};

const sum = function(numbs) {
output = numbs.reduce((accumulator, currentValue) => {

  return accumulator + currentValue;
},0 );
return output
};

const multiply = function(numbs) {
output = numbs.reduce((accumulator, currentValue) => {

  return accumulator * currentValue;
}, 
);
return output
};


const power = function(num1,num2) {
	return num1**num2
};

const factorial = function(num) {
let output = 1
for(i=1; i <= num; i++){
  
  output = i * output
}
return output
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
