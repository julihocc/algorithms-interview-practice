import {expect} from "chai";
import {AVLTree} from "./solution";

describe("AVL Tree", () => {
    test("rebalance", () => {
        const t = new AVLTree();
        t.insert(7);
        t.insert(6);
        t.insert(5);
        t.insert(4);
        t.insert(3);
        t.insert(2);
        t.insert(1);
        const result = t.transverseInOrder()
        const expected = [1, 2, 3, 4, 5, 6, 7]
        expect(result).to.deep.equal(expected)
    });
})