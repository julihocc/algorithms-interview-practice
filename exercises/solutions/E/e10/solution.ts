/**
 * Create a priority queue using the heap tree structure
 */
export class MinHeap {
    private heap: number[] = [];

    public insert(value: number): void {
        this.heap.push(value);
        this.bubbleUp();
    }

    public extractMin(): number | undefined {
        if (this.heap.length === 0) return undefined;

        const min = this.heap[0];
        const end = this.heap.pop();

        if (this.heap.length > 0 && end !== undefined) {
            this.heap[0] = end;
            this.bubbleDown();
        }

        return min;
    }

    public getData(): number[] {
        return [...this.heap];
    }

    private bubbleUp(): void {
        let index = this.heap.length - 1;
        const element = this.heap[index];

        while (index > 0) {
            const parentIndex = Math.floor((index - 1) / 2);
            const parent = this.heap[parentIndex];
            if (parent <= element) break;

            
            this.heap[parentIndex] = element;
            this.heap[index] = parent;
            index = parentIndex;
        }
    }

    private bubbleDown(): void {
        let index = 0;
        const length = this.heap.length;
        const element = this.heap[0];

        while (true) {
            let leftChildIndex = 2 * index + 1;
            let rightChildIndex = 2 * index + 2;
            let leftChild: number | null = null;
            let rightChild: number | null = null;
            let swapIndex = null;

            if (leftChildIndex < length) {
                leftChild = this.heap[leftChildIndex];
                if (leftChild < element) {
                    swapIndex = leftChildIndex;
                }
            }

            if (rightChildIndex < length) {
                rightChild = this.heap[rightChildIndex];
                if (
                    (swapIndex === null && rightChild < element) ||
                    (swapIndex !== null && rightChild < leftChild!)
                ) {
                    swapIndex = rightChildIndex;
                }
            }

            if (swapIndex === null) break;

            this.heap[index] = this.heap[swapIndex];
            this.heap[swapIndex] = element;

            index = swapIndex;
        }
    }
}

