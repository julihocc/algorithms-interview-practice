/**
 * // Example usage:
 * const graph = new Graph();
 * graph.addEdge(5, 2);
 * graph.addEdge(5, 0);
 * graph.addEdge(4, 0);
 * graph.addEdge(4, 1);
 * graph.addEdge(2, 3);
 * graph.addEdge(3, 1);
 *
 * const result = graph.topologicalSort();
 * console.log(result);  // Expected output: [ 4, 5, 0, 2, 3, 1 ]
 */

import { Graph } from './solution';
import { expect } from 'chai';

describe('Graph', () => {
    test('should return the topological sort of a graph', () => {
        const graph = new Graph();
        graph.addEdge(5, 2);
        graph.addEdge(5, 0);
        graph.addEdge(4, 0);
        graph.addEdge(4, 1);
        graph.addEdge(2, 3);
        graph.addEdge(3, 1);

        const result = graph.topologicalSort();
        const expected = [ 4, 5, 0, 2, 3, 1 ];
        expect(result).to.deep.equal(expected);
    });
});