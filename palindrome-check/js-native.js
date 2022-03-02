/**
 * Native Method, using javascript methods
 * @class use native methods
 * @method invertString invert a string given by a constructor
 * @method removeSpaces remove spaces using a for statement
 * @method checkString check a modify string with the original one
 */
module.exports = class {
    palindrome = ''
    constructor(palindrome) {
        this.palindrome = palindrome
    }
    reverseString() {
        let palindrome = this.palindrome.split("").reverse().join("")
        return this.checkPalindrome(palindrome)
    }

    checkPalindrome(palindrome) {
        let checker = palindrome.replace(/ /g, '')
        let toCheck = this.palindrome.replace(/ /g, '')
        if (checker === toCheck) {
            console.log(`${ this.palindrome } is a palindrome`)
        } else {
            console.log(`${ this.palindrome } is not a palindrome. Result: ${ stringInverted }`)
        }
    }
}