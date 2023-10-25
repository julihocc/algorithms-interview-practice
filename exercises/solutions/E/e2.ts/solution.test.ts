import { expect } from "chai";
import { TreeNode, retrieveTree } from "./solution";

describe("solution", () => {
  it("does something", () => {
    const root: TreeNode = new TreeNode(1);
    root.left = new TreeNode(2);
    root.right = new TreeNode(3);
    root.left.left = new TreeNode(4);
    root.left.right = new TreeNode(5);
    root.right.left = new TreeNode(6);
    root.right.right = new TreeNode(7);
    const result= retrieveTree(root);
    const expected = [1, 2, 3, 4, 5, 6, 7];
    expect(result).to.deep.equal(expected);
  })
})
