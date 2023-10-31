export function secondLargest(arr: number[]): number | null {
    if (arr.length < 2) {
        return null
    }

    let largest = Number.NEGATIVE_INFINITY;
    let secondLargest = Number.NEGATIVE_INFINITY;

    for (let num of arr) {
        if (num > largest) {
            secondLargest = largest;
            largest = num;
        } else if (num > secondLargest) {
            secondLargest = num;
        }
    }

    if (secondLargest === Number.NEGATIVE_INFINITY) {
        return null;
    }

    return secondLargest;
}
