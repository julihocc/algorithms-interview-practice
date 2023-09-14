// Subroutine to find largest rectangle in histogram
const findLargestRectangleInHistogram = (heights) => {
    let stack = [];
    let maxArea = 0;

    for (let i = 0; i < heights.length; i++) {
        while (stack.length && heights[i] <= heights[stack[stack.length - 1]]) {
            const height = heights[stack.pop()];
            const width = stack.length ? i - stack[stack.length - 1] - 1 : i;
            maxArea = Math.max(maxArea, height * width);
        }
        stack.push(i);
    }

    while (stack.length) {
        const height = heights[stack.pop()];
        const width = stack.length ? heights.length - stack[stack.length - 1] - 1 : heights.length;
        maxArea = Math.max(maxArea, height * width);
    }

    return maxArea;
};

// Main function to find largest rectangle in binary matrix
const findLargestRectangleInBinaryMatrix = (matrix) => {

    // Check if the matrix is undefined or empty
    if (!matrix || matrix.length === 0 || !matrix[0]) {
        return 0;
    }

    let maxArea = 0;
    let dpArray = new Array(matrix[0].length).fill(0);

    for (const row of matrix) {
        for (let i = 0; i < row.length; i++) {
            dpArray[i] = row[i] === 1 ? dpArray[i] + 1 : 0;
        }
        const maxAreaForRow = findLargestRectangleInHistogram(dpArray);
        maxArea = Math.max(maxArea, maxAreaForRow);
    }

    return maxArea;
};

module.exports = { findLargestRectangleInBinaryMatrix };
