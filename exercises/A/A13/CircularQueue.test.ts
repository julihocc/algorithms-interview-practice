/**
 * @file test/CircularQueue.test.ts
 */

import { CircularQueue } from "./CircularQueue";

// Describe the CircularQueue test suite
describe("CircularQueue", () => {
    // Test for enqueue and dequeue functionality
    test("should enqueue and dequeue correctly", () => {
        const queue = new CircularQueue<number>(3);

        // Test enqueue operation
        expect(queue.enqueue(1)).toBeUndefined();
        expect(queue.enqueue(2)).toBeUndefined();
        expect(queue.enqueue(3)).toBeUndefined();
        expect(queue.enqueue(4)).toBe("Queue is full");

        // Test dequeue operation
        expect(queue.dequeue()).toBe(1);
        expect(queue.dequeue()).toBe(2);
        expect(queue.dequeue()).toBe(3);
        expect(queue.dequeue()).toBe("Queue is empty");
    });
});
