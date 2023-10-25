/**
 * Find the majority number in an array
 *
 * We use Boyer-Moore Voting Algorithm
 * https://en.wikipedia.org/wiki/Boyer%E2%80%93Moore_majority_vote_algorithm
 */

export function solution(nums: number[]): number|null {
    let candidate :number = nums[0]
    let count :number = 1

    for (let num of nums) {
        if (count === 0) {
            candidate = num
            count = 1
        } else if (candidate=== num) {
            count += 1
        } else {
            count -=1
        }
    }

    let recount :number = 0

    for (let num of nums) {
        if (num === candidate) {
            recount += 1
        }
    }

    if (recount > nums.length / 2) {
        return candidate
    } else {
        return null
    }
}
