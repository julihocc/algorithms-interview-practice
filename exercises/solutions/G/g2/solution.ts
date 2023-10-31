/**
 * Given x, find y that is min |x-y|, y has the same number of set bits as x and y!=x
 */
export function closestNumberWithSameSetBits(x: number): number | null {
    let temp = x;
    let setBits = 0;

    
    while (temp > 0) {
        setBits += temp & 1;
        temp >>= 1;
    }

    
    if (setBits === 0 || setBits === 32) {
        return null;
    }

    
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

    
    return null;
}

