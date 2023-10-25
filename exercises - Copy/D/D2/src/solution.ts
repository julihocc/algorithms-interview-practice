export function secondLargest(arr: number[]): number | null {

    const unique = Array.from(new Set(arr));
    if (unique.length < 2) {
        return null;
    }

    const sorted = unique.sort((a, b) => b - a);

    return sorted[1];
}
