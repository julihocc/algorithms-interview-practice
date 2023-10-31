import { expect } from "chai";
import { TreeNode, isSameDepth } from "./solution";

describe("solution", () => {
  it("does something", () => {
    const root = new TreeNode(1);
    root.left = new TreeNode(2);
    root.right = new TreeNode(3);
    root.right.left = new TreeNode(4);
    root.right.right = new TreeNode(5);

    expect(isSameDepth(root, 2, 3)).to.be.true;
    expect(isSameDepth(root, 2, 4)).to.be.false;
    expect(isSameDepth(root, 2, 5)).to.be.false;
    expect(isSameDepth(root, 3, 4)).to.be.false;
    expect(isSameDepth(root, 3, 5)).to.be.false;
    expect(isSameDepth(root, 4, 5)).to.be.true;
  })
})
