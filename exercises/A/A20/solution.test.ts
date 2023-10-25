import {expect} from "chai";
import {solution} from "./solution";

describe("solution", () => {
    it("()", () => {
        expect(solution("()")).to.equal(1);
    })

    it("[]", () => {
        expect(solution("[]")).to.equal(1);
    })

    it("{}", () => {
        expect(solution("{}")).to.equal(1);
    })
})
