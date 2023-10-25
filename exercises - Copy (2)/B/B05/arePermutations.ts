export function arePermutations(str1: string, str2: string): boolean {
    // Check if the lengths are the same
    if (str1.length !== str2.length) {
        return false;
    }

    // Create dictionaries (maps) to hold the character count
    let charCount1: { [key: string]: number } = {};
    let charCount2: { [key: string]: number } = {};

    // Count the occurrence of each character in str1
    for (let char of str1) {
        charCount1[char] = (charCount1[char] || 0) + 1;
    }

    // Count the occurrence of each character in str2
    for (let char of str2) {
        charCount2[char] = (charCount2[char] || 0) + 1;
    }

    // Compare the character counts
    for (let char in charCount1) {
        if (charCount1[char] !== charCount2[char]) {
            return false;
        }
    }

    return true;
}
