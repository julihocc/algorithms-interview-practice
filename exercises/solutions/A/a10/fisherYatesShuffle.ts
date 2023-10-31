/**
 * @file /src/fisherYatesShuffle.ts
 */

/**
 * Shuffles an array using the Fisher-Yates (Knuth) algorithm.
 *
 * @param arr - The array to shuffle.
 * @returns A new shuffled array.
 */
const fisherYatesShuffle = <T>(arr: T[]): T[] => {
    const shuffledArr = [...arr];
    for (let i = shuffledArr.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [shuffledArr[i], shuffledArr[j]] = [shuffledArr[j], shuffledArr[i]];
    }
    return shuffledArr;
};

export {fisherYatesShuffle};
