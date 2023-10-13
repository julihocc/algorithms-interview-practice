// Function to add two arrays of single-digit numbers
export const addArraysOfDigits = (arrayA: number[], arrayB: number[]): number[] => {
    let resultArray: number[] = [];
    let carryOver: number = 0;
    const lengthOfArrayA: number = arrayA.length;
    const lengthOfArrayB: number = arrayB.length;
    const maxLength: number = Math.max(lengthOfArrayA, lengthOfArrayB);

    // Iterate through both arrays from right to left
    for (let i = 0; i < maxLength; i++) {
        const digitFromA: number = i < lengthOfArrayA ? arrayA[lengthOfArrayA - i - 1] : 0;
        const digitFromB: number = i < lengthOfArrayB ? arrayB[lengthOfArrayB - i - 1] : 0;
        const sum: number = digitFromA + digitFromB + carryOver;

        carryOver = Math.floor(sum / 10);
        resultArray.unshift(sum % 10);
    }

    // Handle any remaining carry-over
    if (carryOver > 0) {
        resultArray.unshift(carryOver);
    }

    return resultArray;
};
