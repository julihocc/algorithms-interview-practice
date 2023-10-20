/**
 * Longest Common Subsequence
 * This function is an implementation of the Longest Common Subsequence (LCS) problem, which finds the longest subsequence that two sequences have in common. The provided implementation uses dynamic programming to solve the problem.
 */

export function longestCommonSubsequence(text1: string, text2: string): string {
    const m: number = text1.length;
    const n: number = text2.length;

    const dp: number[][] = new Array(m + 1).fill(0).map(() => new Array(n + 1).fill(0));

    for (let i: number = 1; i <= m; i++) {
        for (let j: number = 1; j <= n; j++) {
            if (text1[i - 1] === text2[j - 1]) {
                dp[i][j] = 1 + dp[i - 1][j - 1]
            } else {
                dp[i][j] = Math.max(dp[i - 1][j], dp[i][j - 1])
            }
        }
    }

    let index: number = dp[m][n];
    const lcsArray: string[] = new Array(index + 1).fill('');

    let i: number = m;
    let j: number = n;

    while (i > 0 && j > 0) {
        if (text1[i - 1] === text2[j - 1]) {
            lcsArray[index - 1] = text1[i - 1];
            i--;
            j--;
            index--;
        } else if (dp[i - 1][j] > dp[i][j - 1]) {
            i--;
        } else {
            j--;
        }
    }

    return lcsArray.join('')
}
