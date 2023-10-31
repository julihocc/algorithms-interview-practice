import { Queue } from "./Queue";

/**
 * @file hotPotato.ts
 * @description Hot Potato simulation using Queue
 */

const hotPotato = (players: string[], num: number): string => {
    const queue = new Queue<string>();

    for (const player of players) {
        queue.enqueue(player);
    }

    while (queue.size() > 1) {
        for (let i = 0; i < num; i++) {
            queue.enqueue(queue.dequeue() as string);
        }
        queue.dequeue();
    }

    return queue.dequeue() as string;
};

export { hotPotato };
