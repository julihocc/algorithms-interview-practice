import {expect} from "chai";
import {findLongestWord} from "./solution";

describe("solution", () => {
    it("does something", () => {
        const letters = "abppplee";
        const dictionary = ["able", "ale", "apple", "bale", "appleee", "kangaroo"];
        const result = findLongestWord(letters, dictionary);
        expect(result).to.equal("apple");
    })
})
