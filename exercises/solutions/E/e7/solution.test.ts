import {expect} from "chai";
import {BinarySearchTree} from "./solution";

describe("Binary Search Tree", () => {
    test("both operations", () => {
        const bst = new BinarySearchTree();
        bst.insert(5);
        bst.insert(3);
        bst.insert(7);
        bst.insert(2);
        bst.insert(4);
        bst.insert(6);
        bst.insert(8);
        expect(bst.transverseInOrder()).to.deep.equal([2, 3, 4, 5, 6, 7, 8]);
        bst.delete(2);
        bst.delete(3);
        bst.delete(5);
        expect(bst.transverseInOrder()).to.deep.equal([4, 6, 7, 8]);
    })
});