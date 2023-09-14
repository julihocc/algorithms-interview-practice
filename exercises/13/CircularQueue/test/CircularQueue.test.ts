// test/CircularQueue.test.ts

import { CircularQueue } from "../src/CircularQueue";
import { expect } from "chai";
import "mocha";

describe("CircularQueue", () => {
    it("should enqueue and dequeue correctly", () => {
        const queue = new CircularQueue<number>(3);
        expect(queue.enqueue(1)).to.be.undefined;
        expect(queue.enqueue(2)).to.be.undefined;
        expect(queue.enqueue(3)).to.be.undefined;
        expect(queue.enqueue(4)).to.equal("Queue is full");
        expect(queue.dequeue()).to.equal(1);
        expect(queue.dequeue()).to.equal(2);
        expect(queue.dequeue()).to.equal(3);
        expect(queue.dequeue()).to.equal("Queue is empty");
    });
});
