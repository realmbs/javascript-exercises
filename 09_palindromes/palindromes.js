const palindromes = function (str) {
  return str === str.split('').reverse().join('');
};

// Do not edit below this line
module.exports = palindromes;
