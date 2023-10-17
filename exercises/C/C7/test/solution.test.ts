import { expect } from "chai";
import { ListNode, PriorityQueue } from "../src/solution";

describe("solution", () => {
  it("enqueue three increasing-priority task", () => {
    const pq = new PriorityQueue();
    pq.enqueue("task1", 1);
    pq.enqueue("task2", 2);
    pq.enqueue("task3", 3);
    expect(pq.peek()).to.equal("task3");
    const dequeued:string|null = pq.dequeue();
    expect(dequeued).to.equal("task3");
    expect(pq.peek()).to.equal("task2");
  })
})
