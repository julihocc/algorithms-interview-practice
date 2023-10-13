// src/CircularQueue.test.ts

/**
 * CircularQueue class for implementing a circular queue data structure.
 */
class CircularQueue<T> {
    private array: T[];
    private front: number;
    private rear: number;
    private size: number;

    constructor(size: number) {
        this.array = new Array(size);
        this.front = -1;
        this.rear = -1;
        this.size = size;
    }

    enqueue(element: T): string | void {
        if (this.isFull()) {
            return "Queue is full";
        }
        this.rear = (this.rear + 1) % this.size;
        this.array[this.rear] = element;
        if (this.front === -1) {
            this.front = this.rear;
        }
    }

    dequeue(): T | string {
        if (this.isEmpty()) {
            return "Queue is empty";
        }
        const element = this.array[this.front];
        if (this.front === this.rear) {
            this.front = this.rear = -1;
        } else {
            this.front = (this.front + 1) % this.size;
        }
        return element;
    }

    isEmpty(): boolean {
        return this.front === -1;
    }

    isFull(): boolean {
        return (this.rear + 1) % this.size === this.front;
    }

    peek(): T | string {
        if (this.isEmpty()) {
            return "Queue is empty";
        }
        return this.array[this.front];
    }
}

export { CircularQueue };
