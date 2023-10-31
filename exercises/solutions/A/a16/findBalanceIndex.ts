

/**
 * Finds the index that balances the left and right sum of the array.
 * @param arr - The input array of numbers.
 * @returns The index that balances the array or -1 if no such index exists.
 */
export function findBalanceIndex(arr: number[]): number {
    let totalSum = arr.reduce((acc, val) => acc + val, 0);
    let leftSum = 0;

    for (let i = 0; i < arr.length; i++) {
        totalSum -= arr[i];

        if (leftSum === totalSum) {
            return i;
        }

        leftSum += arr[i];
    }

    return -1;
}
