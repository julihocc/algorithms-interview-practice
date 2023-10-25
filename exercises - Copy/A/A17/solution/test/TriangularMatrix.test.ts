import { expect } from 'chai';
import { TriangularMatrix } from '../src/TriangularMatrix';

describe('TriangularMatrix', () => {
    it('should store and retrieve a 3x3 triangular matrix', () => {
        const matrix = [
            [1, 0, 0],
            [2, 3, 0],
            [4, 5, 6]
        ];
        const triangularMatrix = new TriangularMatrix(matrix);
        expect(triangularMatrix.getOriginalMatrix()).to.deep.equal(matrix);
        expect(triangularMatrix.getElement(2, 2)).to.equal(6);
        expect(triangularMatrix.getElement(0, 2)).to.equal(0);
    });

    it('should handle an empty matrix', () => {
        const matrix: number[][] = [];
        const triangularMatrix = new TriangularMatrix(matrix);
        expect(triangularMatrix.getOriginalMatrix()).to.deep.equal([]);
    });
});
