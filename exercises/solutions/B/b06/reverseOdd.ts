export function reverseOddPositionedWords(s: string): string {
    let words: string[] = s.split(' ');  
    for (let i = 1; i < words.length; i += 2) {  
        words[i] = words[i].split('').reverse().join('');  
    }
    return words.join(' ');  
}
