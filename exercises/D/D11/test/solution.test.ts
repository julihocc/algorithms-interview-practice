import { expect } from "chai";
import { minWindow } from "../src/solution";

describe("solution", () => {
  it("does something", () => {
    let s = "ADOBECODEBANC";
    let t = "ABC";
    let result = minWindow(s, t);
    expect(result).to.equal("BANC");
  })
})
