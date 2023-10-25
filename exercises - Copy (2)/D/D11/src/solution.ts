/**
 * Find the smallest substirng in S that contains all the characters in the string T. T is a string of unique characters.
 *
 * We use Minimum Window Substring Algorithm to solve this problem.
 */

export function minWindow(word: string, requiredChars: string): string {
    if (!word || !requiredChars) {
        return "";
    }

    let [leftPointer, rightPointer, currentlyPresent]: number[] = [0, 0, 0];
    let windowCounts: { [key: string]: number } = {};

    let window: { stretch: number; stop: number; start: number } = {
        stretch: Infinity, start: 0, stop: 0
    }

    while (rightPointer < word.length && currentlyPresent !== requiredChars.length) {
        const char: string = word[rightPointer];
        windowCounts[char] = (windowCounts[char] || 0) + 1;

        if (requiredChars.includes(char) && windowCounts[char] == 1) {
            currentlyPresent++;
        }

        while (leftPointer <= rightPointer && currentlyPresent === requiredChars.length) {

            let lengthCurrentWindow: number = rightPointer - leftPointer + 1;

            if (lengthCurrentWindow < window.stretch) {
                window.stretch = lengthCurrentWindow;
                window.start = leftPointer;
                window.stop = rightPointer;
            }

            const char: string = word[leftPointer];

            windowCounts[char] = (windowCounts[char] || 0) - 1;

            if (requiredChars.includes(char) && windowCounts[char] == 0) {
                currentlyPresent--;
            }

            leftPointer++;
        }

        rightPointer++;
    }

    return window.stretch === Infinity ? "" : word.slice(window.start, window.stop + 1);
}
