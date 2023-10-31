export class Graph {
    adjList: Map<number, number[]>;

    constructor() {
        this.adjList = new Map();
    }

    addVertex(vertex: number): void {
        if (!this.adjList.has(vertex)) {
            this.adjList.set(vertex, []);
        }
    }

    addEdge(src: number, dest: number): void {
        if (!this.adjList.has(src)) {
            this.addVertex(src);
        }
        this.adjList.get(src)!.push(dest);
    }

    topologicalSort(): number[] | null {
        const stack: number[] = [];
        const visited: boolean[] = Array(this.adjList.size).fill(false);
        for (let [vertex] of this.adjList) {
            if (!visited[vertex]) {
                this.topologicalSortUtil(vertex, visited, stack);
            }
        }
        return stack.reverse();
    }

    private topologicalSortUtil(vertex: number, visited: boolean[], stack: number[]): void {
        visited[vertex] = true;
        const neighbors = this.adjList.get(vertex);
        if (neighbors) {
            for (let neighbor of neighbors) {
                if (!visited[neighbor]) {
                    this.topologicalSortUtil(neighbor, visited, stack);
                }
            }
        }
        stack.push(vertex);
    }
}
