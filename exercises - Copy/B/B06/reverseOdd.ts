export function reverseOddPositionedWords(s: string): string {
    let words: string[] = s.split(' ');  // Split string into words
    for (let i = 1; i < words.length; i += 2) {  // Loop through words with step 2, starting from 1 (to reverse even-positioned words in 0-based indexing)
        words[i] = words[i].split('').reverse().join('');  // Reverse the word
    }
    return words.join(' ');  // Join words back into a string
}
