

/**
 * Iteratively flattens a nested array.
 * @param arr - The nested array to flatten.
 * @returns A flattened array.
 */
export function flattenArrayIterative(arr: any[]): any[] {
    let result: any[] = [];
    let stack: any[] = [arr];
    while (stack.length) {
        const element = stack.pop();
        if (Array.isArray(element)) {
            stack.push(...[...element].reverse());
        } else {
            result.push(element);
        }
    }
    return result;
}
