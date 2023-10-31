export class Node {
    value: number;
    next: Node | null;

    constructor(value: number) {
        this.value = value;
        this.next = null;
    }
}

export function mergeSort(node: Node | null): Node | null {
    if (!node || !node.next) {
        return node;
    }
    
    const middle = getMiddle(node);
    const nextOfMiddle = middle!.next;
    middle!.next = null;
    
    const left = mergeSort(node);
    const right = mergeSort(nextOfMiddle);
    
    return merge(left, right);
}

export function getMiddle(node: Node | null): Node | null {
    if (!node) {
        return node;
    } else {
        let slow: Node = node;
        let fast: Node = node;
        while (slow.next !== null && fast.next !== null && fast.next.next !== null) {
            slow = slow.next;
            fast = fast.next.next;
        }
        return slow;
    }
}

export function merge(left: Node | null, right: Node | null): Node | null {
    if (!left) {
        return right;
    }
    if (!right) {
        return left;
    }

    let result: Node | null = null;

    if (left.value <= right.value) {
        result = left;
        result.next = merge(left.next, right);
    } else {
        result = right;
        result.next = merge(left, right.next);
    }
    return result;
}

export function retrieveList(node: Node | null): number[] {
    const orderedList: number[] = [];
    let current: Node | null = node;
    while (current !== null) {
        orderedList.push(current.value);
        current = current.next;
    }
    return orderedList;
}
