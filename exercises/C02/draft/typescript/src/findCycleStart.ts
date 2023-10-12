export class ListNode {
    value: number;
    next: ListNode | null;

    constructor(value: number, next: ListNode | null = null) {
        this.value = value;
        this.next = next;
    }
}

export function findCycleStart(head: ListNode | null): ListNode | null {
    // Step 1: Detect a cycle using the hare and tortoise pointers
    let hare: ListNode | null = head;
    let tortoise: ListNode | null = head;
    let hasCycle: boolean = false;

    while (hare !== null && hare.next !== null) {
        hare = hare.next.next;
        tortoise = tortoise!.next;  // Using non-null assertion operator since we've already checked hare isn't null.
        if (hare === tortoise) {
            hasCycle = true;
            break;
        }
    }

    // If no cycle, return null
    if (!hasCycle) {
        return null;
    }

    // Step 2: Find the start of the cycle
    hare = head;
    while (hare !== tortoise) {
        hare = hare!.next;  // Using non-null assertion operator since we know hare will eventually meet tortoise.
        tortoise = tortoise!.next;
    }

    return hare;
}
