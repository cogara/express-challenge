var modOne = require('./modOne.js');
var modTwo = require('./modTwo.js');

module.exports = {
  balance: balance,
  randomToCurrency: randomToCurrency,
}

function balance() {
  return 'Account Balance:\n';
}

function randomToCurrency(min, max) {
  return modTwo.toCurrency(modOne.getRandom(min, max));
}
