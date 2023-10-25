/**
 * @file functionalSwapArrayElements.ts
 * @path /src/functionalSwapArrayElements.ts
 *
 * This file contains the implementation for swapping array elements based on each position's value.
 */

/**
 * Swaps the elements in an array based on the value at each position using functional programming.
 * @param a - The input array
 * @returns A new array after performing the swaps
 */
export const functionalSwapArrayElements = (a: number[]): number[] => {
    return a.map(element => a[element]);
};
