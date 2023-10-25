import { expect } from "chai";
import { solution } from "./solution";

describe("solution", () => {
  it("finds the majority candidate", () => {
    const nums = [3, 3, 4, 2, 4, 4, 2, 4, 4]
    expect(solution(nums)).to.equal(4)
  })
  it("does not find a majority candidate", () => {
    const nums = [3, 3, 4, 2, 4, 4, 2, 4]
    expect(solution(nums)).to.equal(null)
  })
})
