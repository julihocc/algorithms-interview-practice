import {expect} from "chai";
import {Trie} from "./solution";

describe("Example of a trie", () => {
    test("Build a trie", () => {
        const dictionary = ['bat'];
        const trie = new Trie();
        trie.buildTrie(dictionary);
        const expected = `{"children":{"b":{"children":{"a":{"children":{"t":{"children":{},"isEndOfWord":true}},"isEndOfWord":false}},"isEndOfWord":false}},"isEndOfWord":false}`
        const result = JSON.stringify(trie.root);
        expect(result).to.equal(expected);
    })
})