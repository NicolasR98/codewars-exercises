/**
 Sum of Pairs
 * Given a list of integers and a single sum value, return the first two values (parse from the left please) in order of appearance that add up to form the sum.
 * If there are two or more pairs with the required sum, the pair whose second element has the smallest index is the solution.
 *
      sum_pairs([10, 5, 2, 3, 7, 5],         10)
      #              ^-----------^   5 + 5 = 10, indices: 1, 5
      #                    ^--^      3 + 7 = 10, indices: 3, 4 *
      #  * the correct answer is the pair whose second value has the smallest index
      == [3, 7]
 */
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