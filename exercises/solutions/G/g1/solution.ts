/**
 * Find the numbers that are repeated an odd number of times in an array.
 */

export function findNumbersWithOddOccurrences(arr: number[]): number[] {
    // Create a map to store bitsets
    const bitsetMap = new Map<number, number>();

    // Process each number in the array
    for (const num of arr) {
        // If the number is already in the map, toggle the last bit
        if (bitsetMap.has(num)) {
            const bitset = bitsetMap.get(num)!;
            bitsetMap.set(num, bitset ^ 1);
        } else {
            // If the number is not in the map, add it with the last bit set to 1
            bitsetMap.set(num, 1);
        }
    }

    // Find numbers that appear an odd number of times
    const oddOccurrences: number[] = [];
    for (const [num, bitset] of bitsetMap.entries()) {
        if (bitset & 1) {
            oddOccurrences.push(num);
        }
    }

    return oddOccurrences;
}

