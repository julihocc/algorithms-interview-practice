export function arePermutations(str1: string, str2: string): boolean {
    
    if (str1.length !== str2.length) {
        return false;
    }

    
    let charCount1: { [key: string]: number } = {};
    let charCount2: { [key: string]: number } = {};

    
    for (let char of str1) {
        charCount1[char] = (charCount1[char] || 0) + 1;
    }

    
    for (let char of str2) {
        charCount2[char] = (charCount2[char] || 0) + 1;
    }

    
    for (let char in charCount1) {
        if (charCount1[char] !== charCount2[char]) {
            return false;
        }
    }

    return true;
}
