class TrieNode {
    children: { [key: string]: TrieNode };
    isEndOfWord: boolean;

    constructor() {
        this.children = {};
        this.isEndOfWord = false;
    }
}

export class Trie {
    root: TrieNode;

    constructor() {
        this.root = new TrieNode();
    }

    // Insert a word into the trie
    insert(word: string): void {
        let currentNode = this.root;
        for (let i = 0; i < word.length; i++) {
            const ch = word[i];
            if (!currentNode.children[ch]) {
                currentNode.children[ch] = new TrieNode();
            }
            currentNode = currentNode.children[ch];
        }
        currentNode.isEndOfWord = true;
    }

    // Build trie from a list of words
    buildTrie(dictionary: string[]): void {
        for (const word of dictionary) {
            this.insert(word);
        }
    }
}

