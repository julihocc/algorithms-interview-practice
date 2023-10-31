/**
 * // Example usage:
 * const g = new Graph(7);
 * g.addEdge(0, 1);
 * g.addEdge(0, 2);
 * g.addEdge(1, 3);
 * g.addEdge(2, 3);
 * g.addEdge(3, 4);
 * g.addEdge(4, 5);
 * g.addEdge(5, 6);
 *
 * const start = 0;
 * const target = 6;
 * const path = g.bfsShortestPath(start, target);
 *
 * if (path) {
 *        console.log(`Shortest path from ${start} to ${target} is:`, path );
 * } else {
 *        console.log(`No path found between ${start} and ${target}.`);
 * }
 */

import { Graph } from './solution';
import { expect } from 'chai';

describe('Graph', () => {
    it('should find the shortest path between two vertices', () => {
        const g = new Graph(7);
        g.addEdge(0, 1);
        g.addEdge(0, 2);
        g.addEdge(1, 3);
        g.addEdge(2, 3);
        g.addEdge(3, 4);
        g.addEdge(4, 5);
        g.addEdge(5, 6);

        const start = 0;
        const target = 6;
        const path = g.bfsShortestPath(start, target);

        expect(path).to.eql([0, 1, 3, 4, 5, 6]);
    });

    it('should return a shorter path if one exists', () => {
        const g = new Graph(7);
        g.addEdge(0,6);
        g.addEdge(0, 1);
        g.addEdge(0, 2);
        g.addEdge(1, 3);
        g.addEdge(2, 3);
        g.addEdge(3, 4);
        g.addEdge(4, 5);
        g.addEdge(5, 6);

        const start = 0;
        const target = 6;
        const path = g.bfsShortestPath(start, target);

        expect(path).to.eql([0, 6]);
    });

    it('should return null if no path is found', () => {
        const g = new Graph(7);
        g.addEdge(0, 1);
        g.addEdge(0, 2);
        g.addEdge(1, 3);
        g.addEdge(2, 3);
        g.addEdge(3, 4);
        g.addEdge(4, 5);
        g.addEdge(5, 6);

        const start = 0;
        const target = 7;
        const path = g.bfsShortestPath(start, target);

        expect(path).to.be.null;
    });
});

