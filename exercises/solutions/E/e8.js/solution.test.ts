import {BinarySearchTree} from "./solution";
import {expect} from "chai";

describe("Binary Search Tree", () => {
    test("both operations", () => {
        const bst2 = new BinarySearchTree();
        bst2.insert(5);
        bst2.insert(3);
        bst2.insert(7);
        bst2.insert(2);
        bst2.insert(4);
        bst2.insert(6);
        bst2.insert(8);
        expect(bst2.search(8)).to.be.true
        bst2.delete(2);
        expect(bst2.search(2)).to.be.false
    })
});