/**
 * Find the numbers that are repeated an odd number of times in an array.
 */

export function findNumbersWithOddOccurrences(arr: number[]): number[] {
    
    const bitsetMap = new Map<number, number>();

    
    for (const num of arr) {
        
        if (bitsetMap.has(num)) {
            const bitset = bitsetMap.get(num)!;
            bitsetMap.set(num, bitset ^ 1);
        } else {
            
            bitsetMap.set(num, 1);
        }
    }

    
    const oddOccurrences: number[] = [];
    for (const [num, bitset] of bitsetMap.entries()) {
        if (bitset & 1) {
            oddOccurrences.push(num);
        }
    }

    return oddOccurrences;
}

