/**
 * Given x, find y that is min |x-y|, y has the same number of set bits as x and y!=x
 */
export function closestNumberWithSameSetBits(x: number): number | null {
    let temp = x;
    let setBits = 0;

    // Count the number of set bits
    while (temp > 0) {
        setBits += temp & 1;
        temp >>= 1;
    }

    // If x is 0 or a power of 2, or if x is all 1s, then no such y exists
    if (setBits === 0 || setBits === 32) {
        return null;
    }

    // Try to find the closest larger number with the same number of set bits
    let larger = x + 1;
    while (true) {
        let temp = larger;
        let bits = 0;
        while (temp > 0) {
            bits += temp & 1;
            temp >>= 1;
        }
        if (bits === setBits) {
            return larger;
        }
        larger++;
    }

    // This point should never be reached
    return null;
}

