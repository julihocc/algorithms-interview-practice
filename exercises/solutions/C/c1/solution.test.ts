import {expect} from "chai";
import {LinkedList, ListNode} from "./solution";

describe("solution", () => {
    it("Find the middle of 1->2->3->4", () => {
        const list: LinkedList = new LinkedList();
        list.append(1);
        list.append(2);
        list.append(3);
        list.append(4);
        const middle: ListNode | null = list.findMiddle();
        expect(middle!.value).to.equal(2);
    })
    it("Find the middle of 1->2->3->4->5", () => {
        const list: LinkedList = new LinkedList();
        list.append(1);
        list.append(2);
        list.append(3);
        list.append(4);
        list.append(5);
        const middle: ListNode | null = list.findMiddle();
        expect(middle!.value).to.equal(3);
    })
})
