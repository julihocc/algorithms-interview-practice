/**
 * Merges two sorted arrays into one sorted array.
 *
 * @param {number[]} firstArray - The first sorted array.
 * @param {number} firstArrayLength - The length of the first sorted array.
 * @param {number[]} secondArray - The second sorted array.
 * @param {number} secondArrayLength - The length of the second sorted array.
 */
const mergeSortedArrays = (
    firstArray: number[],
    firstArrayLength: number,
    secondArray: number[],
    secondArrayLength: number
): void => {
    let firstPointer: number = firstArrayLength - 1;
    let secondPointer: number = secondArrayLength - 1;
    let mergePointer: number = firstArrayLength + secondArrayLength - 1;

    /**
     * Compare elements from the end and place the larger one at the end of firstArray.
     */
    while (firstPointer >= 0 && secondPointer >= 0) {
        if (firstArray[firstPointer] > secondArray[secondPointer]) {
            firstArray[mergePointer] = firstArray[firstPointer];
            firstPointer--;
        } else {
            firstArray[mergePointer] = secondArray[secondPointer];
            secondPointer--;
        }
        mergePointer--;
    }

    /**
     * If there are elements left in secondArray, move them to firstArray.
     */
    while (secondPointer >= 0) {
        firstArray[mergePointer] = secondArray[secondPointer];
        secondPointer--;
        mergePointer--;
    }
};

export { mergeSortedArrays };
