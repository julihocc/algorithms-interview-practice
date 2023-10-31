import {expect} from "chai";
import {kthToLast, Node} from "./solution";

describe("solution", () => {
    it(" 1 -> 2 -> 3 -> 4 -> 5", () => {
        const head = new Node(1);
        head.next = new Node(2);
        head.next.next = new Node(3);
        head.next.next.next = new Node(4);
        head.next.next.next.next = new Node(5);
        const result = kthToLast(head, 2);
        expect(result!.data).to.equal(4);
    })
})
