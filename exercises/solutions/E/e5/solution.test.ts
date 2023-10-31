import {expect} from 'chai';
import {isMirrored, TreeNode} from './solution'

describe("isMirrored", () => {

    test("Symmetric tree", () => {
        const root = new TreeNode(1);
        root.left = new TreeNode(2);
        root.right = new TreeNode(2);
        root.left.left = new TreeNode(3);
        root.left.right = new TreeNode(4);
        root.right.left = new TreeNode(4);
        root.right.right = new TreeNode(3);
        expect(isMirrored(root)).to.equal(true);
    });

    test("Asymmetric tree", () => {
        const root = new TreeNode(1);
        root.left = new TreeNode(2);
        root.right = new TreeNode(3);
        expect(isMirrored(root)).to.equal(false);
    });

});