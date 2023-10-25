import { expect } from "chai";
import { findConsecutiveSequence } from "./solution";

describe("solution", () => {
  it("does something", () => {
    const nums = [1, 2, 3, 4, 5, 6, 7, 8];
    const target = 9;
    const result = findConsecutiveSequence(nums, target);
    expect(result).to.deep.equal([2, 3, 4]);
  })
})
