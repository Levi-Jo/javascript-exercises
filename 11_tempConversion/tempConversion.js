const convertToCelsius = function(inputTemp) {
  let output
  output = parseFloat(((inputTemp - 32) * (5/9)).toFixed(1))
  return output
};

const convertToFahrenheit = function(inputTemp) {
  let output
  output = parseFloat(((inputTemp * (9/5)) + 32).toFixed(1))
  return output
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
