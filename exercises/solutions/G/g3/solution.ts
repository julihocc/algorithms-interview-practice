/**
 * Find the number of different bits between two numbers
 */
export function countDifferentBits(a: number, b: number): number {
    let xorResult = a ^ b;
    let count = 0;

    while (xorResult > 0) {
        
        count += xorResult & 1;

        
        xorResult >>= 1;
    }

    return count;
}