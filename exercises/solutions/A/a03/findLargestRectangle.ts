/**
 * @file findLargestRectangle.ts
 * @description This file contains functions to find the largest rectangle in a binary matrix.
 */

/**
 * Finds the largest rectangle in a histogram represented by an array of heights.
 * @param {number[]} heights - An array of integers representing the heights of the histogram.
 * @returns {number} - The area of the largest rectangle in the histogram.
 */
const findLargestRectangleInHistogram = (heights: number[]): number => {
    let stack: number[] = [];
    let maxArea: number = 0;

    for (let i = 0; i < heights.length; i++) {
        while (stack.length && heights[i] <= heights[stack[stack.length - 1]]) {
            const height = heights[stack.pop() as number];
            const width = stack.length ? i - stack[stack.length - 1] - 1 : i;
            maxArea = Math.max(maxArea, height * width);
        }
        stack.push(i);
    }

    while (stack.length) {
        const height = heights[stack.pop() as number];
        const width = stack.length ? heights.length - stack[stack.length - 1] - 1 : heights.length;
        maxArea = Math.max(maxArea, height * width);
    }

    return maxArea;
};

/**
 * Finds the largest rectangle in a binary matrix.
 * @param {number[][]} matrix - A 2D array of integers representing the binary matrix.
 * @returns {number} - The area of the largest rectangle in the binary matrix.
 */
const findLargestRectangle = (matrix: number[][]): number => {
    
    if (!matrix || matrix.length === 0 || !matrix[0]) {
        return 0;
    }

    let maxArea: number = 0;
    let dpArray: number[] = new Array(matrix[0].length).fill(0);

    for (const row of matrix) {
        for (let i = 0; i < row.length; i++) {
            dpArray[i] = row[i] === 1 ? dpArray[i] + 1 : 0;
        }
        const maxAreaForRow = findLargestRectangleInHistogram(dpArray);
        maxArea = Math.max(maxArea, maxAreaForRow);
    }

    return maxArea;
};

export {findLargestRectangle};
