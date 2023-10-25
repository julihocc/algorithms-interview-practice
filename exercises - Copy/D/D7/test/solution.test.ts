import {expect} from "chai";
import {solution} from "../src/solution";

describe("solution", () => {
    it("does something", () => {
        expect(solution("cba")).to.equal("abc");
    })
    it("does something else", () => {
        expect(solution("banana")).to.equal("abn");
    })
})
