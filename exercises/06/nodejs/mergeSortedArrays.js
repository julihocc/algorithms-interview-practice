// Function to merge two sorted arrays
const mergeSortedArrays = (firstArray, firstArrayLength, secondArray, secondArrayLength) => {
    let firstPointer = firstArrayLength - 1;
    let secondPointer = secondArrayLength - 1;
    let mergePointer = firstArrayLength + secondArrayLength - 1;

    // Compare elements from the end and place the larger one at the end of firstArray
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

    // If there are elements left in secondArray, move them to firstArray
    while (secondPointer >= 0) {
        firstArray[mergePointer] = secondArray[secondPointer];
        secondPointer--;
        mergePointer--;
    }
};

module.exports = mergeSortedArrays;
