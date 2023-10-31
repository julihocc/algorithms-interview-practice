/**
 * Function to find the maximum value in an array using recursion.
 * @param {number[]} arr - The array of numbers.
 * @param {number} low - The low index for the current sub-array.
 * @param {number} high - The high index for the current sub-array.
 * @returns {number | undefined} - The maximum value in the array or undefined if the array is empty.
 */

const findMaximum = (arr: number[], low: number, high: number): number | undefined => {
    
    if (low > high) {
        return undefined;
    }

    if (low === high) {
        return arr[low];
    }

    
    const mid: number = Math.floor((low + high) / 2);

    
    const leftMax: number | undefined = findMaximum(arr, low, mid);

    
    const rightMax: number | undefined = findMaximum(arr, mid + 1, high);

    
    return Math.max(leftMax ?? -Infinity, rightMax ?? -Infinity);
};


const myArray: number[] = [1, 5, 3, 9, 2];
const maxValue: number | undefined = findMaximum(myArray, 0, myArray.length - 1);


export {findMaximum};  
