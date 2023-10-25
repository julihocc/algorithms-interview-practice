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

export function solution(word:string):string {
    let leftPointer:number = 0;
    let maxRunLength:number = 0;
    let maxRunStart:number = 0;
    let freqInCurrentWindow: Map<string, number> = new Map<string, number>();

    for (let rightPointer:number = 0; rightPointer < word.length; rightPointer++){

        const char: string = word[rightPointer];
        freqInCurrentWindow.set(char, (freqInCurrentWindow.get(char) || 0) + 1);

        while (freqInCurrentWindow.size > 2){
            const startingChar:string = word[leftPointer];
            freqInCurrentWindow.set(startingChar, freqInCurrentWindow.get(startingChar)! - 1);
            if (freqInCurrentWindow.get(startingChar) === 0){
                freqInCurrentWindow.delete(startingChar);
            }
            leftPointer++;
        }

        if (rightPointer - leftPointer + 1 > maxRunLength){
            maxRunLength = rightPointer - leftPointer + 1;
            maxRunStart = leftPointer;
        }
    }

    return word.substring(maxRunStart, maxRunStart + maxRunLength);
}
