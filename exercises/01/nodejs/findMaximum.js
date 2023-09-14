/**
 * Function to find the maximum value in an array using recursion.
 * @param {number[]} arr - The array of numbers.
 * @param {number} low - The low index for the current sub-array.
 * @param {number} high - The high index for the current sub-array.
 * @returns {number | undefined} - The maximum value in the array or undefined if the array is empty.
 */

const findMaximum = (arr, low, high) => {
  // Base case: when the array has only one element
  if (low > high) {
    return undefined;
  }

  if (low === high) {
    return arr[low];
  }

  // Find the middle index
  const mid = Math.floor((low + high) / 2);

  // Find the maximum value in the left half
  const leftMax = findMaximum(arr, low, mid);

  // Find the maximum value in the right half
  const rightMax = findMaximum(arr, mid + 1, high);

  // Return the greater of the two maximum values
  return Math.max(leftMax, rightMax);
};

// Test the function
const myArray = [1, 5, 3, 9, 2];
// const maxValue = findMaximum(myArray, 0, myArray.length - 1);
const maxValue = findMaximum([], 0, -1)
console.log(`The maximum value in the array is ${maxValue}`);


module.exports = {findMaximum};  // Export the function
