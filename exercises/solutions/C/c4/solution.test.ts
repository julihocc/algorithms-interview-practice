import {expect} from "chai";
import {mergeSort, Node, retrieveList} from "./solution";

describe("solution", () => {
    it("mergeSort 4->2->8->1->5", () => {
        const head = new Node(4);
        head.next = new Node(2);
        head.next.next = new Node(8);
        head.next.next.next = new Node(1);
        head.next.next.next.next = new Node(5);
        const sortedList = mergeSort(head);
        expect(retrieveList(sortedList)).to.deep.equal([1, 2, 4, 5, 8]);
    })
})
