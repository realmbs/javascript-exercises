const convertToCelsius = function (tempInFahrenheit) {
  return (tempInFahrenheit - 32) * 5 / 9;
};

const convertToFahrenheit = function (tempInCelsius) {
  return (tempInCelsius * 9 / 5 + 32);
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
