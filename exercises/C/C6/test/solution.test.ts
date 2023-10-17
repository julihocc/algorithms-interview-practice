import { expect } from "chai";
import { ListNode, reverseLinkedList, retrieveLinkedList } from "../src/solution";

describe("solution", () => {
  it("reverses 1->2->3", () => {
    let node1 = new ListNode(1);
    let node2 = new ListNode(2);
    let node3 = new ListNode(3);
    node1.next = node2;
    node2.next = node3;

    let headForReversed = reverseLinkedList(node1);
    let result = retrieveLinkedList(headForReversed);

    expect(headForReversed!.value).to.equal(3);
    expect(result).to.deep.equal([3, 2, 1]);
  })
})
