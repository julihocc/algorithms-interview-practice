export function canFormWord(word: string, letters: string): boolean {
    const sortedLetters = letters.split("").sort()

    for (const letter of word) {
        const index = sortedLetters.indexOf(letter)
        if (index !== -1) {
            sortedLetters.splice(index, 1)
        } else {
            return false
        }
    }

    return true
}

export function findLongestWord(letters: string, dictionary: string[]): string {
    let longestWord = "";
    for (const word of dictionary) {
        if (canFormWord(word, letters)) {
            if (word.length > longestWord.length) {
                longestWord = word
            }
        }
    }
    return longestWord
}
