export class ListNode {
    value: string;
    priority: number;
    next: ListNode | null;

    constructor(value: string, priority: number) {
        this.value = value;
        this.priority = priority;
        this.next = null;
    }
}

export class PriorityQueue {
    head: ListNode | null = null;

    enqueue(value: string, priority: number): void {
        const newNode = new ListNode(value, priority);
        if (!this.head || priority > this.head.priority) {
            newNode.next = this.head;
            this.head = newNode;
        } else {
            let current = this.head;
            while (current.next && priority <= current.next.priority) {
                current = current.next;
            }
            newNode.next = current.next;
            current.next = newNode;
        }
    }

    dequeue(): string | null {
        if (!this.head) return null;
        const removedValue: string = this.head.value;
        this.head = this.head.next;
        return removedValue;
    }

    peek(): string | null {
        if (!this.head) return null;
        return this.head.value;
    }

    isEmpty(): boolean {
        return this.head === null;
    }
}
