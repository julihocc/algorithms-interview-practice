/**
 * // Example
 * const g = new Graph();
 * g.addEdge(0, 1);
 * g.addEdge(1, 2);
 * g.addEdge(2, 0);
 * g.addEdge(1, 3);
 * g.addEdge(3, 4);
 * g.addEdge(4, 1);
 *
 * console.log(g.innerMostCycles());  // [ [ 0, 1, 2, 0 ], [ 1, 3, 4, 1 ] ]
 */

import { Graph } from './solution';
import { expect } from 'chai';

describe('Graph', () => {
    test('should return the innermost cycles of a graph', () => {
        const g = new Graph();
        g.addEdge(0, 1);
        g.addEdge(1, 2);
        g.addEdge(2, 0);
        g.addEdge(1, 3);
        g.addEdge(3, 4);
        g.addEdge(4, 1);

        const result = g.innerMostCycles();
        const expected = [ [ 0, 1, 2, 0 ], [ 1, 3, 4, 1 ] ];
        expect(result).to.deep.equal(expected);
    });
});