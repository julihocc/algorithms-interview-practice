// File: /test/reverseNBlocks.test.ts
import { reverseNBlocks } from '../src/reverseNBlocks';

describe('reverseNBlocks', () => {
    it('should reverse 3-sized blocks', () => {
        const arr: number[] = [1, 2, 3, 4, 5, 6, 7, 8];
        reverseNBlocks(arr, 3);
        expect(arr).toEqual([3, 2, 1, 6, 5, 4, 8, 7]);
    });

    it('should handle arrays with duplicate elements', () => {
        const arr: number[] = [1, 1, 1, 2, 2, 2];
        reverseNBlocks(arr, 2);
        expect(arr).toEqual([1, 1, 2, 1, 2, 2]);
    });

    it('should handle arrays with length less than N', () => {
        const arr: number[] = [1, 2];
        reverseNBlocks(arr, 3);
        expect(arr).toEqual([2, 1]);
    });

    it('should handle empty arrays', () => {
        const arr: number[] = [];
        reverseNBlocks(arr, 3);
        expect(arr).toEqual([]);
    });

    it('should handle arrays with a single element', () => {
        const arr: number[] = [1];
        reverseNBlocks(arr, 3);
        expect(arr).toEqual([1]);
    });

    it('should handle N = 1', () => {
        const arr: number[] = [1, 2, 3, 4];
        reverseNBlocks(arr, 1);
        expect(arr).toEqual([1, 2, 3, 4]);
    });
});
