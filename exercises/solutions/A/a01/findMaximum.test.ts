

import {findMaximum} from './findMaximum';


test('finds the maximum value in [1, 5, 3, 9, 2]', () => {
    expect(findMaximum([1, 5, 3, 9, 2], 0, 4)).toBe(9);
});


test('finds the maximum value in [-1, -5, -3, -9, -2]', () => {
    expect(findMaximum([-1, -5, -3, -9, -2], 0, 4)).toBe(-1);
});


test('finds the maximum value in [42]', () => {
    expect(findMaximum([42], 0, 0)).toBe(42);
});


test('returns undefined for an empty array', () => {
    expect(findMaximum([], 0, -1)).toBeUndefined();
});
