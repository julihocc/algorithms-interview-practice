import { mergeSortedArrays } from './mergeSortedArrays';

// Basic test case
test('Basic Test: mergeSortedArrays merges correctly', () => {
    const firstArray: number[] = [1, 3, 5, 0, 0, 0];
    const secondArray: number[] = [2, 4, 6];
    mergeSortedArrays(firstArray, 3, secondArray, 3);
    expect(firstArray).toEqual([1, 2, 3, 4, 5, 6]);
});

// Edge case: One of the arrays is empty
test('Edge Case: One array is empty', () => {
    const thirdArray: number[] = [1];
    const fourthArray: number[] = [];
    mergeSortedArrays(thirdArray, 1, fourthArray, 0);
    expect(thirdArray).toEqual([1]);
});

// Edge case: Both arrays are empty
test('Edge Case: Both arrays are empty', () => {
    const emptyArray1: number[] = [];
    const emptyArray2: number[] = [];
    mergeSortedArrays(emptyArray1, 0, emptyArray2, 0);
    expect(emptyArray1).toEqual([]);
});

// Edge case: Arrays with negative numbers
test('Edge Case: Arrays with negative numbers', () => {
    const negativeArray1: number[] = [-3, -1, 0, 0, 0];
    const negativeArray2: number[] = [-4, -2];
    mergeSortedArrays(negativeArray1, 2, negativeArray2, 2);
    expect(negativeArray1).toEqual([-4, -3, -2, -1, 0]);
});

// Edge case: Arrays with duplicate numbers
test('Edge Case: Arrays with duplicate numbers', () => {
    const duplicateArray1: number[] = [1, 1, 1, 0, 0, 0];
    const duplicateArray2: number[] = [1, 1, 1];
    mergeSortedArrays(duplicateArray1, 3, duplicateArray2, 3);
    expect(duplicateArray1).toEqual([1, 1, 1, 1, 1, 1]);
});

// Edge case: Arrays with only one element each
test('Edge Case: Arrays with only one element each', () => {
    const singleElementArray1: number[] = [1, 0];
    const singleElementArray2: number[] = [2];
    mergeSortedArrays(singleElementArray1, 1, singleElementArray2, 1);
    expect(singleElementArray1).toEqual([1, 2]);
});
