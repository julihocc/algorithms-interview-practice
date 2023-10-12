// linked-list.test.ts

import { ListNode, findCycleStart } from '../src/findCycleStart';
import { expect } from 'chai';

describe('Linked List Cycle Start Detection', () => {

    it('should return the node at the start of the cycle', () => {
        let node1 = new ListNode(1);
        let node2 = new ListNode(2);
        let node3 = new ListNode(3);
        let node4 = new ListNode(4);
        let node5 = new ListNode(5);

        node1.next = node2;
        node2.next = node3;
        node3.next = node4;
        node4.next = node5;
        node5.next = node3;  // This creates the cycle

        expect(findCycleStart(node1)!.value).to.equal(3);
    });

    it('should return null if there is no cycle', () => {
        let node1 = new ListNode(1);
        let node2 = new ListNode(2);
        let node3 = new ListNode(3);

        node1.next = node2;
        node2.next = node3;
        node3.next = null;

        expect(findCycleStart(node1)).to.be.null;
    });

    it('should handle an empty list', () => {
        expect(findCycleStart(null)).to.be.null;
    });

    it('should return the node if it points to itself', () => {
        let node1 = new ListNode(1);
        node1.next = node1;

        expect(findCycleStart(node1)!.value).to.equal(1);
    });
});
