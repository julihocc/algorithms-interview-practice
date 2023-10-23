/**
 * "Given A, B, and C as inputs, determine if C can be formed by an interleaved combination of the characters of A and B. Example:
 * A = ""abcd""
 * B = ""abcd""
 * C = ""aabcbcdd"""
 */

export function solution(A: string, B: string, C: string): boolean {
    if (A.length + B.length !== C.length) return false;

    let dp: Map<number, Map<number, boolean>> = new Map()

    for (let i: number = -1; i < A.length; i++) {
        dp.set(i, new Map());
        for (let j: number = -1; j < B.length; j++) {
            dp.get(i)!.set(j, false);
        }
    }

    dp.set(-1, new Map());
    dp.get(-1)!.set(-1, true);
    console.log(dp.get(-1)!.get(-1));

    for (let i: number = 0; i < A.length; i++) {
        dp.get(i)!.set(-1, dp.get(i-1)!.get(-1)! && A[i] == C[i]);
    }

    for (let j: number = 0; j < B.length; j++) {
        dp.get(-1)!.set(j, dp.get(-1)!.get(j-1)! && B[j] == C[j]);
    }

    for (let i: number = 0; i < A.length; i++) {
        for (let j:number = 0; j < B.length; j++) {
            if (A[i] == C[i + j + 1]) {
                dp.get(i)!.set(j, dp.get(i)!.get(j)! || dp.get(i - 1)!.get(j)!);
            }
            if (B[j] == C[i + j + 1]) {
                dp.get(i)!.set(j, dp.get(i)!.get(j)! || dp.get(i)!.get(j-1)!);
            }
        }
    }

    return dp.get(A.length-1)!.get(B.length-1)!;
}
