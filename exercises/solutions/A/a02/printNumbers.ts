/**
 * Function to print numbers from 1 to 100 without using loops or conditionals
 * @param {number} [n=1] - The starting number, defaults to 1
 * @param {number[]} [logOutput=[]] - Array to store the printed numbers, useful for testing
 * @returns {number[]} - Returns the array of printed numbers
 */
export function printNumbers(n: number = 1, logOutput: number[] = []): number[] {
    
    logOutput.push(n);

    
    return n === 100 ? logOutput : printNumbers(n + 1, logOutput);
}
