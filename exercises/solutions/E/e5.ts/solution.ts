/**
 * Determine if a tree is mirrored
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

export function isMirrored(root: TreeNode | null): boolean {
    if (!root) {
        return true;
    }

    return isMirroredHelper(root.left, root.right);
}

function isMirroredHelper(left: TreeNode | null, right: TreeNode | null): boolean {
    if (!left && !right) {
        return true;
    }

    if (!left || !right) {
        return false;
    }

    return left.value === right.value
        && isMirroredHelper(left.left, right.right)
        && isMirroredHelper(left.right, right.left);
}

