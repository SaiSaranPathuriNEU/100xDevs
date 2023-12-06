/*
  Write a function `findLargestElement` that takes an array of numbers and returns the largest element.
  Example:
  - Input: [3, 7, 2, 9, 1]
  - Output: 9
*/

function findLargestElement(numbers) {
  //   if (numbers.length === 0) return undefined; //other way to do this
  //   return Math.max(...numbers);

  let max = 0;
  if (numbers.length == 0) return undefined;
  for (var i = 0; i < numbers.length; i++) {
    if (i == 0) max = numbers[i];

    if (numbers[i] > max) max = numbers[i];
  }

  return max;
}

module.exports = findLargestElement;
