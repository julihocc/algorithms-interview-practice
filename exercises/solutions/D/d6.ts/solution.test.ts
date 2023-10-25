import {expect} from "chai";
import {longestCommonSubsequence} from "./solution";

describe("solution", () => {
    it("does something", () => {
        expect(longestCommonSubsequence("abcde", "aced")).to.equal("ace")
    })
    it("does something else", () => {
        expect(longestCommonSubsequence("abc", "abc")).to.equal("abc")
    })
    it("does something else", () => {
        expect(longestCommonSubsequence("abc", "def")).to.equal("")
    })
})
