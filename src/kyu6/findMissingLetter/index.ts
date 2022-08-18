/**
Find the missing letter

* Write a method that takes an array of consecutive (increasing) letters as input and that returns the missing letter in the array.

* You will always get an valid array. And it will be always exactly one letter be missing. The length of the array will always be at least 2.
* The array will always contain letters in only one case.

      Example:

      ['a','b','c','d','f'] -> 'e'
      ['O','Q','R','S'] -> 'P'
      ["a","b","c","d","f"] -> "e"
      ["O","Q","R","S"] -> "P"
      (Use the English alphabet with 26 letters!)
 */

const findMissingLetter = (array: string[]):string | null => {
  let result: string | null = null;

  array.some((letter, index, arr) => {
    const charCode = letter.charCodeAt(0);
    const nextLetter = arr[index + 1];
    const nextExpectedLetter = String.fromCharCode(charCode + 1)

    if (nextLetter !== nextExpectedLetter) {
      result = nextExpectedLetter
      return true
    }

    return false;
  })

  return result;
}

const missingLetter = findMissingLetter(['a','b','c','d','f']);
console.log(missingLetter)