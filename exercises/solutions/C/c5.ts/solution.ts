export class ListNode {
    value: number;
    next: ListNode | null;

    constructor(value: number) {
        this.value = value;
        this.next = null;
    }
}

export function isPalindrome(head: ListNode|null): boolean {
    if (!head) return true;
    if (head && !head.next) return true;

    //Step 1: Find the middle of the linked list
    let slow: ListNode|null = head;
    let fast: ListNode|null = head;
    while (fast && fast.next && fast.next.next) {
        slow = slow!.next;
        fast = fast.next.next;
    }

    //Step 2: Reverse the second half of the linked list
    let prev: ListNode|null = null;
    let curr: ListNode|null = slow!.next;
    while (curr) {
        const temp:ListNode|null = curr.next;
        curr.next = prev;
        prev = curr;
        curr = temp;
    }
    slow!.next = prev;

    //Step 3: Compare the first half and the second half of the linked list
    let firstHalf: ListNode|null = head;
    let secondHalf: ListNode|null = slow!.next;
    while (secondHalf) {
        if (firstHalf!.value !== secondHalf.value) return false;
        firstHalf = firstHalf!.next;
        secondHalf = secondHalf.next;
    }
    return true;
}