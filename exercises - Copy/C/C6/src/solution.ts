export class ListNode {
    value: number;
    next: ListNode | null ;

    constructor(value: number) {
        this.value = value;
        this.next = null;
    }
}

export function reverseLinkedList(head: ListNode) {
    let prev: ListNode | null = null;
    let current: ListNode | null = head;
    let next: ListNode | null = null;

    while (current !== null) {
        next = current.next;
        current.next = prev;
        prev = current;
        current = next;
    }
    return prev;
}

export function retrieveLinkedList(head: ListNode | null): number[] {
    let current: ListNode | null = head;
    let result: number[] = [];

    while (current !== null) {
        result.push(current.value);
        current = current.next;
    }
    return result;
}
