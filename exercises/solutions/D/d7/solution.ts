/**
 * Given a string of lowercase letters, find a string that contains all unique characters and has the lowest lexicographic value possible
 */


export function solution(str: string): string {
    const uniqueChars = Array.from(new Set(str.split('')));
    const sortedUniqueChars = uniqueChars.sort();
    return sortedUniqueChars.join('');
}
