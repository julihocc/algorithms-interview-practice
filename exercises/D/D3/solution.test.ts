import { expect } from "chai";
import { secondLargest } from "./solution";

describe("solution", () => {
  it("finds second largest", () => {
    expect(secondLargest([1, 2, 3, 4, 5])).to.equal(4);
  })
})
