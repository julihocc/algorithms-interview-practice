/**
 * @file SparseMatrixOptimized.ts
 */

/**
 * Represents an optimized sparse matrix using a hash map
 */
export class SparseMatrixOptimized {
    private sparseMap: { [key: string]: number };

    constructor(matrix: number[][]) {
        this.sparseMap = {};
        this.convertToSparse(matrix);
    }

    /**
     * Converts a 2D matrix to an optimized sparse matrix representation
     * @param matrix - The 2D matrix to be converted
     */
    private convertToSparse(matrix: number[][]): void {
        for (let i = 0; i < matrix.length; i++) {
            for (let j = 0; j < matrix[i].length; j++) {
                if (matrix[i][j] !== 0) {
                    const key = `${i}:${j}`;
                    this.sparseMap[key] = matrix[i][j];
                }
            }
        }
    }

    /**
     * Gets the optimized sparse matrix representation
     * @returns Hash map containing keys as "row:col" and values as non-zero elements
     */
    public getSparseMap(): { [key: string]: number } {
        return this.sparseMap;
    }

    /**
     * Converts the optimized sparse matrix back to a 2D array
     * @param rows - Number of rows in the original matrix
     * @param cols - Number of columns in the original matrix
     * @returns The original 2D matrix
     */
    public toOriginalMatrix(rows: number, cols: number): number[][] {
        const originalMatrix: number[][] = Array.from({ length: rows }, () => Array(cols).fill(0));

        for (const [key, value] of Object.entries(this.sparseMap)) {
            const [row, col] = key.split(":").map(Number);
            originalMatrix[row][col] = value;
        }

        return originalMatrix;
    }
}
