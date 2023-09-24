/**
 * @file BalancedParentheses.ts
 */

/**
 * Checks if a series of parentheses is balanced and returns the number of missing parentheses if unbalanced.
 * @param series - The series of parentheses as a string.
 * @returns {number | string} - Returns 0 if balanced, otherwise returns the number of missing parentheses.
 */
export function checkBalancedParentheses(series: string): number | string {
    let count = 0;

    for (const char of series) {
        if (char === '(') {
            count++;
        } else if (char === ')') {
            count--;
        }

        if (count < 0) {
            return Math.abs(count);
        }
    }

    return count === 0 ? "Balanced" : count;
}
