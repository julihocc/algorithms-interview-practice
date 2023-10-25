import { expect } from "chai";
import { solution } from "../src/solution";

describe("solution", () => {
  it("does something", () => {
    expect(solution("1212223311212223")).to.equal("1121222");
  })
    it("does something else", () => {
    expect(solution("111")).to.equal("111");
    })
})
