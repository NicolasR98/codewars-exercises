/**
 Simple Pig Latin
 * Move the first letter of each word to the end of it, then add "ay" to the end of the word. Leave punctuation marks untouched.
 * Examples
 * pigIt('Pig latin is cool'); // igPay atinlay siay oolcay
 * pigIt('Hello world !');     // elloHay orldway !
 */

const pigIt = (a : string) => a.replace(/(\w)(\w+)*/g, "$2$1ay")

console.log(pigIt('Hello world!'))
console.log(pigIt('O emporatay o oresmay !'))