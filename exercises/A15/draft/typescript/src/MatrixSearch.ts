/**
 * @file MatrixSearch.ts
 */

/**
 * Searches for a target element in a sorted 2D matrix.
 * @param {number[][]} matrix - The sorted 2D matrix.
 * @param {number} target - The target element.
 * @returns {boolean} - Whether the target exists in the matrix.
 */
export function searchMatrix(matrix: number[][], target: number): boolean {
    const M = matrix.length;
    if (M === 0) return false;
    const N = matrix[0].length;

    let row = 0;
    let col = N - 1;

    while (row < M && col >= 0) {
        if (matrix[row][col] === target) {
            return true;
        } else if (matrix[row][col] > target) {
            col -= 1;
        } else {
            row += 1;
        }
    }

    return false;
}
