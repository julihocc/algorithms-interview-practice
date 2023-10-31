/**
 * @file countCarPasses.test.ts
 * @description This file contains unit tests for the countCarPasses function.
 */

import { expect } from 'chai';
import { countCarPasses } from './countCarPasses';

describe('countCarPasses', () => {
    it('should return 7 for the given example', () => {
        const cars = ['c->', '<-c', 'c->', 'c->', '<-c', '<-c', 'c->'];
        expect(countCarPasses(cars)).to.equal(7);
    });

    it('should return 3 for the given example', () => {
        const cars = ['c->', '<-c', '<-c', '<-c'];
        expect(countCarPasses(cars)).to.equal(3);
    });

    it('should return 6 for the given example', () => {
        const cars = ['c->', '<-c', 'c->', '<-c', 'c->', '<-c'];
        expect(countCarPasses(cars)).to.equal(6);
    });

    it('should return 0 when all cars are traveling in the same direction', () => {
        const cars = ['c->', 'c->', 'c->'];
        expect(countCarPasses(cars)).to.equal(0);
    });

    it('should return 0 when there are no crossing', () => {
        const cars: string[] = ["<-c", "c->"];
        expect(countCarPasses(cars)).to.equal(0);
    });

    it('should return 0 when there are no cars', () => {
        const cars: string[] = [];
        expect(countCarPasses(cars)).to.equal(0);
    });
});
