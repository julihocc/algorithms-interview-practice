/**
 * @file TriangularMatrix.ts
 */

/**
 * Class for optimal storage and retrieval of a triangular matrix.
 */
export class TriangularMatrix {
    private optimizedMatrix: number[];
    private dimension: number;

    /**
     * Creates a new triangular matrix.
     * @param matrix - The original 2D array representing a square lower triangular matrix.
     * @throws An error if the matrix is not square.
     * @throws An error if the matrix is not lower triangular.
     * @dimension - Number or rows/columns in the matrix.
     */
    constructor(matrix: number[][]) {
        this.optimizedMatrix = this.optimizeMatrix(matrix);
        this.dimension = matrix.length;
    }

    /**
     * Retrieves the original 2D array form of the triangular matrix.
     * @returns The original 2D array.
     */
    public getOriginalMatrix(): number[][] {
        const original: number[][] = Array.from({length: this.dimension}, () => Array(this.dimension).fill(0));
        let index = 0;
        for (let row = 0; row < this.dimension; row++) {
            for (let col = 0; col <= row; col++) {
                original[row][col] = this.optimizedMatrix[index];
                index++;
            }
        }
        return original;
    }

    /**
     * Retrieves a specific element from the original matrix.
     * @param row - The row index.
     * @param col - The column index.
     * @returns The value at the specified position.
     */
    public getElement(row: number, col: number): number {
        if (row < col) {
            return 0;
        }
        const index = row * (row + 1) / 2 + col;
        return this.optimizedMatrix[index];
    }

    /**
     * Optimizes the storage of a triangular matrix.
     * @param matrix - The original 2D array.
     * @returns A 1D array containing the non-zero elements.
     */
    private optimizeMatrix(matrix: number[][]): number[] {
        const optimized: number[] = [];
        for (let row = 0; row < matrix.length; row++) {
            for (let col = 0; col <= row; col++) {
                optimized.push(matrix[row][col]);
            }
        }
        return optimized;
    }
}
