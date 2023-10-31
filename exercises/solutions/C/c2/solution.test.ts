import {expect} from "chai";
import {findLoopStart, ListNode} from "./solution";

describe("solution", () => {
    it("finds the loop start of 1->2->3->4->5->3", () => {
        
        let node1 = new ListNode(1);
        let node2 = new ListNode(2);
        let node3 = new ListNode(3);
        let node4 = new ListNode(4);
        let node5 = new ListNode(5);

        node1.next = node2;
        node2.next = node3;
        node3.next = node4;
        node4.next = node5;
        node5.next = node3;  
        expect(findLoopStart(node1)!.value).to.equal(3);
    })
})
