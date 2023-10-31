/**
 * Given an input stream, detect when the series of characters correspond to a word found in a word array.
 */

export function detectWord(stream: string, words: string[]): string | null {
    const maxLength = Math.max(...words.map(w => w.length));
    let buffer = "";

    for (let char of stream) {
        buffer += char;

        if (buffer.length > maxLength) buffer = buffer.slice(1);

        for (let word of words) {
            if (buffer === word) return word;
        }
    }

    return null;
}