type Graph = { [key: string]: string[] };

function canTranslate(G: Graph, start: string, end: string): boolean {
    let visited: Set<string> = new Set();
    let stack: string[] = [start];
    while (stack.length > 0) {
        let node = stack.pop();
        if (node === end) {
            return true;
        }
        if (!visited.has(node!)) {
            visited.add(node!);
            stack.push(...G[node!]);
        }
    }
    return false;
}

export function decipherWords(translations: string[][], wordPairs: string[][]): string[] {
    let results: string[] = [];
    let G: Graph = {};
    for (let i = 0; i < 26; i++) {
        G[String.fromCharCode(97 + i)] = [];
    }

    for (let [a, b] of translations) {
        G[a].push(b);
    }

    for (let [word1, word2] of wordPairs) {
        if (word1.length !== word2.length) {
            results.push("no");
            continue;
        }
        let match = true;
        for (let j = 0; j < word1.length; j++) {
            if (!canTranslate(G, word1[j], word2[j])) {
                match = false;
                break;
            }
        }
        results.push(match ? "yes" : "no");
    }
    return results;
}

