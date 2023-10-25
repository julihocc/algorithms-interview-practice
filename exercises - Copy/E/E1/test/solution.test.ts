import {solution, TreeNode} from "../src/solution";

describe("solution", () => {
    it("does something", () => {
        const root = new TreeNode(1);
        root.left = new TreeNode(2);
        root.right = new TreeNode(3);
        root.left.left = new TreeNode(4);
        root.left.right = new TreeNode(5);
        root.right.left = new TreeNode(6);
        root.right.right = new TreeNode(7);

        const result = solution(root, 4,5);
        expect(result!.value).toEqual(2);

        const result2 = solution(root, 4,6);
        expect(result2!.value).toEqual(1);
    })
})
