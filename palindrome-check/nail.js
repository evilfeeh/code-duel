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
        if (stringInverted == this.palindrome) {
            console.log(`${ this.palindrome } is a palindrome`)
        }
    }
}