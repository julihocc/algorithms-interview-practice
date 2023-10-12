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
 * // paths will be ["DDRR", "DRRD", "RDRD", "RRDD"]
 */
export function findPaths(
    x: number,
    y: number,
    x0: number,
    y0: number,
): string[] {
    let paths: string[] = [""];
    if (x <= x0 && y <= y0) {
        paths = [""]
    } else if (x === x0 && y > y0) {
        paths = ["R".repeat(y - y0)];
    } else if (y === y0 && x > x0) {
        paths = ["D".repeat(x - x0)];
    } else if (x > x0 && y > y0) {
        const pathFromAbove = findPaths(x - 1, y, x0, y0).map((path) => path + "D");
        const pathFromLeft = findPaths(x, y - 1, x0, y0).map((path) => path + "R");
        paths = [...pathFromAbove, ...pathFromLeft];
    }
    console.log(x, y, x0, y0, paths);
    return paths.sort();
}
