/**
 * Given a binary tree, print out the nodes in order of top-to-bottom, and left-to-right
 */

export class TreeNode {
    left: TreeNode | null;
    right: TreeNode | null;
    value: number;

    constructor(value: number) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

export function retrieveTree(root: TreeNode | null): number[] | null{
    if (root === null) {
        return null;
    }

    const queue: TreeNode[] = [];
    queue.push(root);

    const output: number[] = [];
    output.push(root.value);

    while (queue.length > 0) {
        const node: TreeNode | undefined = queue.shift();

        if (node){
            if (node.left) {
                queue.push(node.left);
                output.push(node.left.value);
            }

            if (node.right) {
                queue.push(node.right);
                output.push(node.right.value);
            }
        }
    }

    return output;
}
