import { expect } from 'chai';
import { ListNode, findMiddle } from '../src/findMiddle';

describe('findMiddle', () => {
    it('should return null for an empty list', () => {
        expect(findMiddle(null)).to.be.null;
    });

    it('should return the only node for a list with one element', () => {
        const head = new ListNode(1);
        expect(findMiddle(head)!.value).to.equal(1);
    });

    it('should return the middle for a list with odd number of elements', () => {
        const head = new ListNode(1, new ListNode(2, new ListNode(3)));
        expect(findMiddle(head)!.value).to.equal(2);
    });

    it('should return the second middle for a list with even number of elements', () => {
        const head = new ListNode(1, new ListNode(2, new ListNode(3, new ListNode(4))));
        expect(findMiddle(head)!.value).to.equal(3);
    });
});
