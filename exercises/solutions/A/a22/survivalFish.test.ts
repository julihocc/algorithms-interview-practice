/**
 * @file survivalFish.test.ts
 */
import {expect} from 'chai';
import {survivalFish} from './survivalFish'; 

describe('survivalFish', () => {
    const testCases: Array<[number[], number]> = [
        [[-1, -1], 2],
        [[1, 1], 2],
        [[-1, 1], 2],
        [[2, -1], 1],
        [[1, -2], 1],
        [[-2, 6, 1, -7, -5, 4, 3], 5],
        [[-2, 6, 1, -7, -5, 4, -3], 4]
    ];

    testCases.forEach(([fishArray, expectedResult]) => {
        it(`should return ${expectedResult} when the input is ${fishArray}`, () => {
            const actualResult: number = survivalFish(fishArray);
            expect(actualResult).to.equal(expectedResult);
        });
    });
});
