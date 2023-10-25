/**
 "Given a set of numbers of size N-1 whose values range from 1 to N, finding the missing number
 "
 */

export function findMissingNumber(numbers: number[]): number {
    const n = numbers.length + 1;
    const sum = (n * (n + 1)) / 2;
    const sumOfNumbers = numbers.reduce((acc, curr) => acc + curr, 0);
    return sum - sumOfNumbers;
}
