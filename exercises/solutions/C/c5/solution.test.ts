import { expect } from "chai";
import { ListNode, isPalindrome } from "./solution";

describe("solution", () => {
  it("should return true for 1->3->5->3->1", () => {
    const head = new ListNode(1);
    head.next = new ListNode(3);
    head.next.next = new ListNode(5);
    head.next.next.next = new ListNode(3);
    head.next.next.next.next = new ListNode(1);
    expect(isPalindrome(head)).to.be.true;
  })
})
