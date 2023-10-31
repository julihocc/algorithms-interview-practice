/**
 * @file BalancedParentheses.ts
 */

/**
 * Checks if a series of parentheses is balanced and returns the number of missing parentheses if unbalanced.
 * @param series - The series of parentheses as a string.
 * @returns {number | string} - Returns 0 if balanced, otherwise returns the number of missing parentheses.
 */
export function checkBalancedParentheses(series: string): number {
    let stack: string[] = [];
    for (let i of series) {
        if (i === '(') {
            stack.push(i);
        } else if (i === ')') {
            if (stack.length === 0) {
                return 1;
            }
            stack.pop();
        }
    }
    return stack.length
}
