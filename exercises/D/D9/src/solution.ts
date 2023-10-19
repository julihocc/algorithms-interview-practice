/**
 * "Find the largest run of at most two distinct numbers
 * ex:
 *
 * Input: ""1212223311212223""
 * Output: ""1121222""
 *
 * Input: ""111""
 * Output: ""111"""
 */

export function solution(s:string):string {
    let start:number = 0;
    let max_lengt:number = 0;
    let max_start:number = 0;
    let freq = new Map<string, number>();

    for (let end:number = 0; end<s.length; end++){

        const char = s[end];
        freq.set(char, (freq.get(char) || 0) + 1);

        while (freq.size > 2){
            const startingChar = s[start];
            freq.set(startingChar, freq.get(startingChar)! - 1);
            if (freq.get(startingChar) === 0){
                freq.delete(startingChar);
            }
            start++;
        }

        if (end - start + 1 > max_lengt){
            max_lengt = end - start + 1;
            max_start = start;
        }
    }

    return s.substring(max_start, max_start + max_lengt);
}
