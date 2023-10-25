export class ListNode {
  value: number;
  next: ListNode | null;

  constructor(value: number) {
    this.value = value;
    this.next = null;
  }
}

export class LinkedList {
  head: ListNode | null;

  constructor() {
    this.head = null;
  }

  append(value: number):void {
    const newNode: ListNode = new ListNode(value);
    if (!this.head) {
      this.head = newNode;
      return;
    }
    let current:ListNode = this.head;
    while (current.next) {
      current = current.next;
    }
    current.next = newNode;
  }

  findMiddle(): ListNode | null {
    if (!this.head) {
      return null;
    }
    let slow: ListNode = this.head;
    let fast: ListNode = this.head;
    while (fast.next && fast.next.next) {
      slow = slow.next!;
      fast = fast.next.next;
    }
    return slow;
  }
}
