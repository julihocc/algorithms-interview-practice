import {expect} from "chai";
import {detectWord} from "./solution";

describe("detectWord", () => {
    test("detects words", () => {
        const stream = "abcde";
        const words = ["ab", "bc", "cd", "de"];

        expect(detectWord(stream, words)).to.equal("ab");
    })
    test("return null", () => {
        const stream = "abcde";
        const words = ["ba"]

        expect(detectWord(stream, words)).to.equal(null);
    })
})