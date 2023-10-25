import {expect} from "chai";
import {find_kth_largest} from "./solution";

describe("solution", () => {
    it("does something", () => {
        const nums = [3, 2, 1, 5, 6, 4];
        const k = 3;
        const result = find_kth_largest(nums, k);
        expect(result).to.equal(4);
    })
    it("does something else", () => {
        const nums = [3, 2, 3, 1, 2, 4, 5, 5, 6];
        const k = 4;
        const result = find_kth_largest(nums, k);
        expect(result).to.equal(3);
    })
    it("does something else", () => {
        const nums = [1, 1, 1];
        const k = 2;
        const result = find_kth_largest(nums, k);
        expect(result).to.equal(null);
    })
})
