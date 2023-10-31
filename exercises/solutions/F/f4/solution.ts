/**
 * Implement shortest path algorithm for unweighted graphs. BFS approach
 */

export class Graph {
    private graph: Map<number, number[]>;
    private V: number;

    constructor(vertices: number) {
        this.V = vertices;
        this.graph = new Map();

        for (let i = 0; i < vertices; i++) {
            this.graph.set(i, []);
        }
    }

    addEdge(src: number, dest: number): void {
        this.graph.get(src)!.push(dest);
        this.graph.get(dest)!.push(src);
    }

    bfsShortestPath(start: number, target: number): number[] | null {
        const visited: boolean[] = Array(this.V).fill(false);
        const predecessor: number[] = Array(this.V).fill(-1);

        const queue: number[] = [];
        queue.push(start);
        visited[start] = true;

        while (queue.length > 0) {
            const vertex = queue.shift()!;

            if (vertex === target) {
                // Retrieve the path from start to target
                const path: number[] = [];
                let current = vertex;
                while (current !== -1) {
                    path.push(current);
                    current = predecessor[current];
                }
                return path.reverse();
            }

            for (const neighbor of this.graph.get(vertex)!) {
                if (!visited[neighbor]) {
                    visited[neighbor] = true;
                    predecessor[neighbor] = vertex;
                    queue.push(neighbor);
                }
            }
        }

        // If no path is found
        return null;
    }
}