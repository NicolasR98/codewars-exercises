const pigIt = (a : string) => a.replace(/(\w)(\w+)*/g, "$2$1ay")

console.log(pigIt('Hello world!'))
console.log(pigIt('O emporatay o oresmay !'))