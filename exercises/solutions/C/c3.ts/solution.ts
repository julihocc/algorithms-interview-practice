export class Node {
    data: number;
    next: Node | null = null;

    constructor(data: number) {
        this.data = data;
    }
}

export function kthToLast(head: Node, k: number): Node | null {
    let p1: Node | null = head;
    let p2: Node | null = head;

    for (let i = 0; i < k; i++) {
        if (p1 === null) {
            return null;
        }
        p1 = p1.next;
    }

    while (p1 !== null) {
        p1 = p1.next;
        p2 = p2!.next;
    }

    return p2;
}
