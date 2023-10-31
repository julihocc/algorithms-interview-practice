import {expect} from "chai";
import {SparseMatrixOptimized} from "./SparseMatrixOptimized";

describe("SparseMatrixOptimized", () => {
    it("should correctly convert a 2D matrix to optimized sparse matrix representation", () => {
        const matrix = [
            [0, 0, 3],
            [0, 2, 0],
            [1, 0, 0]
        ];
        const sparseMatrix = new SparseMatrixOptimized(matrix);
        const expectedSparseMap = {
            "0:2": 3,
            "1:1": 2,
            "2:0": 1
        };
        expect(sparseMatrix.getSparseMap()).to.deep.equal(expectedSparseMap);
    });

    it("should correctly convert the optimized sparse matrix back to the original 2D matrix", () => {
        const matrix = [
            [0, 0, 3],
            [0, 2, 0],
            [1, 0, 0]
        ];
        const sparseMatrix = new SparseMatrixOptimized(matrix);
        const reconstructedMatrix = sparseMatrix.toOriginalMatrix(3, 3);
        expect(reconstructedMatrix).to.deep.equal(matrix);
    });
});
