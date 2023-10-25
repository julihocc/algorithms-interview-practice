/**
 * @file findAnagrams.ts
 */

/**
 * Checks if two strings are anagrams of each other.
 * @param str1 - The first string.
 * @param str2 - The second string.
 * @returns True if the strings are anagrams, false otherwise.
 */
export function areAnagrams(str1: string, str2: string): boolean {
    const sortedStr1 = str1.split('').sort().join('');
    const sortedStr2 = str2.split('').sort().join('');

    return sortedStr1 === sortedStr2;
}
