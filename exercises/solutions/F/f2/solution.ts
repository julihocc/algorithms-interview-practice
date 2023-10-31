/**
 * Find the innermost cycles in a graph
 */

type AdjacencyList = Map<number, number[]>;

export class Graph {
    private adjacencyList: AdjacencyList = new Map();

    addEdge(v: number, w: number): void {
        if (!this.adjacencyList.has(v)) {
            this.adjacencyList.set(v, []);
        }
        this.adjacencyList.get(v)!.push(w);
    }

    detectCycles(): number[][] {
        const visited: boolean[] = [];
        const stack: number[] = [];
        const cycles: number[][] = [];

        for (const node of this.adjacencyList.keys()) {
            if (!visited[node]) {
                this.isCyclicUtil(node, visited, stack, cycles);
            }
        }

        return cycles;
    }

    innerMostCycles(): number[][] {
        const allCycles = this.detectCycles();
        return allCycles.filter(cycle =>
            !allCycles.some(otherCycle =>
                cycle !== otherCycle && this.isSubset(cycle, otherCycle)
            )
        );
    }

    private isCyclicUtil(v: number, visited: boolean[], stack: number[], cycles: number[][]): void {
        visited[v] = true;
        stack.push(v);

        for (const neighbor of this.adjacencyList.get(v) || []) {
            if (!visited[neighbor]) {
                this.isCyclicUtil(neighbor, visited, stack, cycles);
            } else if (stack.includes(neighbor)) {
                cycles.push(stack.slice(stack.indexOf(neighbor)).concat([neighbor]));  
            }
        }

        stack.pop();
    }

    private isSubset(a: number[], b: number[]): boolean {
        return a.every(val => b.includes(val));
    }
}