/**
Sum of Pairs
Given a list of integers and a single sum value, return the first two values (parse from the left please) in order of appearance that add up to form the sum.

sum_pairs([11, 3, 7, 5],         10)
#              ^--^      3 + 7 = 10
== [3, 7]

sum_pairs([4, 3, 2, 3, 4],         6)
#          ^-----^         4 + 2 = 6, indices: 0, 2 *
#             ^-----^      3 + 3 = 6, indices: 1, 3
#                ^-----^   2 + 4 = 6, indices: 2, 4
#  * entire pair is earlier, and therefore is the correct answer
== [4, 2]

sum_pairs([0, 0, -2, 3], 2)
#  there are no pairs of values that can be added to produce 2.
== None/nil/undefined (Based on the language)

sum_pairs([10, 5, 2, 3, 7, 5],         10)
#              ^-----------^   5 + 5 = 10, indices: 1, 5
#                    ^--^      3 + 7 = 10, indices: 3, 4 *
#  * entire pair is earlier, and therefore is the correct answer
== [3, 7]
 */

// const sumPairs = (ints: number[], s: number): [number, number] | void => {
//   let result: [number, number] | undefined;
//   const cache: {[num: number]: boolean } = {};

//   ints.some((num1, index1, array) => {
//     const arrayWithoutCurrentIndex = array.filter((_, index2) => index1 !== index2);
//     const canBePairSummed = arrayWithoutCurrentIndex.some((num2, index3) => {
//       const areSumOfIndexesPair = (index1 + index3) % 2 === 0;
//       return !cache[index1] && areSumOfIndexesPair && num1 + num2 === s && (result = [num1, num2])
//     })
//     cache[index1] = true;
//     return canBePairSummed
//   })

//   return result;
// }

// function sumPairs(ints: number[], s: number): [number, number] | void {
//   const seen = new Set();
//   for (const n of ints) {
//     if (seen.has(s - n)) return [s - n, n];
//     seen.add(n);
//   }
// }

const sumPairs = (ints: number[], sum: number): [number, number] | void => {
  const set = new Set();

  for (const int of ints) {
    if (set.has(sum - int)) return [sum - int, int];
    set.add(int)
  }
}

console.log(sumPairs([1, 4, 8, 7, 3, 15], 8))
console.log(sumPairs([1, -2, 3, 0, -6, 1], -6))
console.log(sumPairs([10, 5, 2, 3, 7, 5], 10))