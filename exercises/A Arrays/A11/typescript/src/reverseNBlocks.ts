// File: reverseNBlocks.ts
/**
 * Reverses N-sized blocks of an array.
 * @param arr - The array to be modified.
 * @param N - The size of each block to be reversed.
 */
export function reverseNBlocks(arr: number[], N: number): void {
    const n = arr.length;
    for (let i = 0; i < n; i += N) {
        let start = i;
        let end = Math.min(i + N - 1, n - 1);
        while (start < end) {
            [arr[start], arr[end]] = [arr[end], arr[start]];
            start++;
            end--;
        }
    }
}
