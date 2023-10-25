/**
 * @file /test/fisherYatesShuffle.test.ts
 */

import { fisherYatesShuffle } from '../src/fisherYatesShuffle';

test('Shuffle an array of numbers using Fisher-Yates', () => {
    const originalArray = [1, 2, 3, 4, 5];
    const shuffledArray = fisherYatesShuffle(originalArray);
    expect(shuffledArray).not.toEqual(originalArray);
    expect(shuffledArray.sort()).toEqual(originalArray.sort());
});

test('Shuffle an array of strings using Fisher-Yates', () => {
    const originalArray = ['a', 'b', 'c', 'd', 'e'];
    const shuffledArray = fisherYatesShuffle(originalArray);
    expect(shuffledArray).not.toEqual(originalArray);
    expect(shuffledArray.sort()).toEqual(originalArray.sort());
});
