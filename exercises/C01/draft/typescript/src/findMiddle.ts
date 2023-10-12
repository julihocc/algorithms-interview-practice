export class ListNode {
    value: number;
    next: ListNode | null;

    constructor(value: number, next: ListNode | null = null) {
        this.value = value;
        this.next = next;
    }
}

export function findMiddle(head: ListNode | null): ListNode | null {
    if (!head) return null;

    let slow: ListNode | null = head;
    let fast: ListNode | null = head;

    while (fast && fast.next) {
        slow = slow!.next;  // We're certain slow isn't null because of the loop condition.
        fast = fast.next.next;
    }

    return slow;
}
