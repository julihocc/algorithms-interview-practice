// src/flattenArrayRecursive.ts

/**
 * Recursively flattens a nested array.
 * @param arr - The nested array to flatten.
 * @returns A flattened array.
 */
export function flattenArrayRecursive(arr: any[]): any[] {
    let result: any[] = [];
    for (const element of arr) {
        if (Array.isArray(element)) {
            result = result.concat(flattenArrayRecursive(element));
        } else {
            result.push(element);
        }
    }
    return result;
}
