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