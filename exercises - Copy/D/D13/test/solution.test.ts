import { expect } from "chai";
import { solution } from "../src/solution";

describe("solution", () => {
  it("does something", () => {
    expect(solution("abcd", "abcd", "aabcbcdd")).to.be.true;
  })
  it("does something else", () => {
    expect(solution("abcd", "xyz", "axbyczd")).to.be.true;
  })
})
