/**
 * @file Implementation of finding all paths in a matrix using Backtracking
 * @param {number} x - The target x-coordinate.
 * @param {number} y - The target y-coordinate.
 * @param {number} x0 - The starting x-coordinate.
 * @param {number} y0 - The starting y-coordinate.
 * @returns {string[]} An array of strings representing all possible paths from (x0, y0) to (x, y).
 *
 * @description
 * This function calculates all possible paths in a matrix from a starting point (x0, y0) to an ending point (x, y).
 * It uses backtracking to explore and generate these paths, and the paths are represented as strings of "R" (right) and "D" (down) movements.
 * The result is an array of strings containing all possible paths sorted lexicographically.
 *
 * @example
 * const paths = findPaths(2, 2, 0, 0);
 * 
 */
export function findPaths(
    x0: number,
    y0: number,
    x: number,
    y: number,
): string[] {
    let paths: string[] = [""];
    if (x <= x0 && y <= y0) {
        paths = [""]
    } else if (x === x0 && y > y0) {
        paths = ["D".repeat(y - y0)];
    } else if (y === y0 && x > x0) {
        paths = ["R".repeat(x - x0)];
    } else if (x > x0 && y > y0) {
        const pathFromAbove = findPaths(x0, y0, x - 1, y).map((path) => path + "R");
        const pathFromLeft = findPaths(x0, y0, x, y - 1).map((path) => path + "D");
        paths = [...pathFromAbove, ...pathFromLeft];
    }
    return paths.sort();
}
