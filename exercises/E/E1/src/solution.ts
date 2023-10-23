/**
 * Lowest Common Ancestor (LCA) of a Binary Tree
 *
 */
export class TreeNode {
    value: number;
    left: TreeNode | null;
    right: TreeNode | null;

    constructor(value: number) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

export function solution(root: TreeNode | null, p: number, q: number): TreeNode | null {
    if (!root) return null;

    if(root.value === p || root.value === q) return root;

    const left = solution(root.left, p, q);
    const right = solution(root.right, p, q);

    if (left && right) return root;

    return left ? left : right;
}
