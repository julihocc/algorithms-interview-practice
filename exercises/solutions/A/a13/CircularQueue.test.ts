/**
 * @file test/CircularQueue.test.ts
 */

import {CircularQueue} from "./CircularQueue";


describe("CircularQueue", () => {
    
    test("should enqueue and dequeue correctly", () => {
        const queue = new CircularQueue<number>(3);

        
        expect(queue.enqueue(1)).toBeUndefined();
        expect(queue.enqueue(2)).toBeUndefined();
        expect(queue.enqueue(3)).toBeUndefined();
        expect(queue.enqueue(4)).toBe("Queue is full");

        
        expect(queue.dequeue()).toBe(1);
        expect(queue.dequeue()).toBe(2);
        expect(queue.dequeue()).toBe(3);
        expect(queue.dequeue()).toBe("Queue is empty");
    });
});
