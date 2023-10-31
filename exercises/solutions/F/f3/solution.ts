/**
 * Represent a graph in an adjacency matrix and as a list of nodes
 */
export class GraphMatrix {
    private adjacencyMatrix: number[][];

    constructor(private vertices: number) {
        this.adjacencyMatrix = Array(vertices).fill(0).map(row => Array(vertices).fill(0));
    }

    addEdge(v1: number, v2: number): void {
        if (v1 >= this.vertices || v2 >= this.vertices || v1 < 0 || v2 < 0) {
            console.log('Invalid vertices');
            return;
        }
        this.adjacencyMatrix[v1][v2] = 1;
        this.adjacencyMatrix[v2][v1] = 1;  // since it's an undirected graph
    }

    getMatrix(): number[][] {
        return this.adjacencyMatrix;
    }
}

export class GraphList {
    private adjacencyList: Map<number, number[]>;

    constructor() {
        this.adjacencyList = new Map();
    }

    addVertex(vertex: number): void {
        if (!this.adjacencyList.has(vertex)) {
            this.adjacencyList.set(vertex, []);
        }
    }

    addEdge(v1: number, v2: number): void {
        this.adjacencyList.get(v1)?.push(v2);
        this.adjacencyList.get(v2)?.push(v1);
    }

    getList(): Map<number, number[]> {
        return this.adjacencyList;
    }
}


