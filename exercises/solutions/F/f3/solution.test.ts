/**
 * // Test
 * const graphMatrix = new GraphMatrix(4);
 * graphMatrix.addEdge(0, 1);
 * graphMatrix.addEdge(0, 2);
 * graphMatrix.addEdge(1, 2);
 * graphMatrix.addEdge(1, 3);
 * console.log('Adjacency Matrix:', graphMatrix.getMatrix()); // Adjacency Matrix: [ [ 0, 1, 1, 0 ], [ 1, 0, 1, 1 ], [ 1, 1, 0, 0 ], [ 0, 1, 0, 0 ] ]
 *
 * const graphList = new GraphList();
 * graphList.addVertex(0);
 * graphList.addVertex(1);
 * graphList.addVertex(2);
 * graphList.addVertex(3);
 * graphList.addEdge(0, 1);
 * graphList.addEdge(0, 2);
 * graphList.addEdge(1, 2);
 * graphList.addEdge(1, 3);
 * console.log('Adjacency List:', [...graphList.getList()]); // Adjacency List: [ [ 0, [ 1, 2 ] ], [ 1, [ 0, 2, 3 ] ], [ 2, [ 0, 1 ] ], [ 3, [ 1 ] ] ]
 */

import { GraphMatrix, GraphList } from './solution';
import { expect } from 'chai';

describe('Graph', () => {
    describe('GraphMatrix', () => {
        it('should create an adjacency matrix', () => {
            const graphMatrix = new GraphMatrix(4);
            graphMatrix.addEdge(0, 1);
            graphMatrix.addEdge(0, 2);
            graphMatrix.addEdge(1, 2);
            graphMatrix.addEdge(1, 3);
            expect(graphMatrix.getMatrix()).to.deep.equal([[0, 1, 1, 0], [1, 0, 1, 1], [1, 1, 0, 0], [0, 1, 0, 0]]);
        });
    });

    describe('GraphList', () => {
        it('should create an adjacency list', () => {
            const graphList = new GraphList();
            graphList.addVertex(0);
            graphList.addVertex(1);
            graphList.addVertex(2);
            graphList.addVertex(3);
            graphList.addEdge(0, 1);
            graphList.addEdge(0, 2);
            graphList.addEdge(1, 2);
            graphList.addEdge(1, 3);
            expect([...graphList.getList()]).to.deep.equal([[0, [1, 2]], [1, [0, 2, 3]], [2, [0, 1]], [3, [1]]]);
        });
    });
});