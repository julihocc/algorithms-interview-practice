/**
 * Find the number of different bits between two numbers
 */
export function countDifferentBits(a: number, b: number): number {
    let xorResult = a ^ b;
    let count = 0;

    while (xorResult > 0) {
        // Increment count if the least significant bit is 1
        count += xorResult & 1;

        // Right shift to check the next bit
        xorResult >>= 1;
    }

    return count;
}