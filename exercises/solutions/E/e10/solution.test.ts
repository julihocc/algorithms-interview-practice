/**
 * Example:
 *
 * 
 * const pq = new MinHeap();
 * pq.insert(10);
 * pq.insert(5);
 * pq.insert(15);
 * )
 *
 * ); 
 * )
 * ); 
 * )
 * ); 
 * )
 */

import {MinHeap} from './solution';
import {expect} from "chai";

describe('MinHeap', () => {
    test('operations functionality', () => {
        const pq = new MinHeap();
        pq.insert(10);
        pq.insert(5);
        pq.insert(15);
        expect(pq.getData()).to.deep.equal([5, 10, 15]);

        const n1 = pq.extractMin();
        expect(n1).to.equal(5);
        expect(pq.getData()).to.deep.equal([10, 15]);
    });
});