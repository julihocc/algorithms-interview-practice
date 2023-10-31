export class ListNode {
    value: number;
    next: ListNode | null = null;

    constructor(value: number) {
        this.value = value;
    }
}

export function findLoopStart(head: ListNode | null): ListNode | null {
    if (!head) return null;
    let slow: ListNode | null = head;
    let fast: ListNode | null = head;

    
    let isLoop: boolean = false;
    while (fast && fast.next) {
        slow = slow!.next;
        fast = fast.next.next;
        if (slow === fast) {
            isLoop = true;
            break;
        }
    }
    if (!isLoop) return null;

    slow = head;
    while (slow !== fast) {
        slow = slow!.next;
        fast = fast!.next;
    }
    return slow;
}
