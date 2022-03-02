/**
 * Native Method, using javascript methods
 * @class use nail methods to practice
 * @method invertString invert a string given by a constructor
 * @method removeSpaces remove spaces using a for statement
 * @method checkString check a modify string with the original one
 */
module.exports =  class {
    palindrome = ''
    constructor(palindrome) {
        this.palindrome = palindrome
    }
    invertString () {
        let stringInverted = ''
        for (let index = this.palindrome.length - 1; index >= 0; index--) {
            stringInverted += this.palindrome[index]
        }
        return this.checkString(stringInverted)
    }
    checkString (stringInverted) {
        let checker = this.removeSpaces(stringInverted)
        let toCheck = this.removeSpaces(this.palindrome)

        if (checker === toCheck) {
            console.log(`${ this.palindrome } is a palindrome`)
        } else {
            console.log(`${ this.palindrome } is not a palindrome. Result: ${ stringInverted }`)
        }
    }
    removeSpaces(string) {
        let result = ''
        for (let index = 0; index < string.length; index++) {
            if (string[index] == ' ') { continue }
            result += string[index];
        }
        return result
    }
}