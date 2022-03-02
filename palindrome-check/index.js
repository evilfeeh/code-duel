const Nail = require('./nail')
const Native = require('./js-native')


const palindromeCheck = new Nail('ame o poema')
palindromeCheck.invertString()

const palindromeCheck = new Native('ame o poema')
palindromeCheck.reverseString()