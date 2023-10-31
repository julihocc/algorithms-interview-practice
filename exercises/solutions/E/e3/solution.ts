/**
 * Given the root of a tree, write a function that takes two numbers (n1 and n2). Search for these two numbers within
 * the tree and indicate if they are found at the same depth.
 */

export class TreeNode {
    val: number;
    left: TreeNode | null;
    right: TreeNode | null;

    constructor(val: number) {
        this.val = val;
        this.left = null;
        this.right = null;
    }
}

export function findDepth(root: TreeNode | null, n: number, depth: number = 0): number | null {
    if (!root) return null;

    if (root.val === n) return depth;

    const left = findDepth(root.left, n, depth + 1);
    if (left !== null) return left;

    return findDepth(root.right, n, depth + 1);
}

export function isSameDepth(root: TreeNode, n1: number, n2: number): boolean {
    const depth1: number | null = findDepth(root, n1);
    const depth2: number | null = findDepth(root, n2);

    return depth1 !== null && depth2 !== null && depth1 === depth2;
}