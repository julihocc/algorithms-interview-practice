/**
 * Find the consecutive sequence of numbers that sums up to a target number
 */

export function findConsecutiveSequence(nums: number[], target: number): number[] | null {
    let start: number = 0;
    let end: number = 0;
    let currentSum: number = 0;

    while (end < nums.length) {
        currentSum += nums[end];
        while (currentSum > target && start < end) {
            currentSum -= nums[start];
            start++;
        }
        if (currentSum === target) {
            return nums.slice(start, end + 1);
        }
        end++;
    }

    return null;
}
