/**
 * Implement insert and delete operations on an BST
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

export class BinarySearchTree {
    root: TreeNode | null = null;

    insert(value: number): void {
        if (this.root === null) {
            this.root = new TreeNode(value);
        } else {
            this._insertRecursively(this.root, value);
        }
    }

    private _insertRecursively(node: TreeNode, value: number): void {
        if (value < node.value) {
            if (node.left === null) {
                node.left = new TreeNode(value);
            } else {
                this._insertRecursively(node.left, value);
            }
        } else {
            if (node.right === null) {
                node.right = new TreeNode(value);
            } else {
                this._insertRecursively(node.right, value);
            }
        }
    }

    delete(value: number): void {
        this.root = this._deleteRecursively(this.root, value);
    }

    private _deleteRecursively(node: TreeNode | null, value: number): TreeNode | null {
        if (node === null) {
            return null;
        }

        if (value < node.value) {
            node.left = this._deleteRecursively(node.left, value);
        } else if (value > node.value) {
            node.right = this._deleteRecursively(node.right, value);
        } else {
            if (node.left === null && node.right === null) {
                return null;
            } else if (node.left === null) {
                return node.right;
            } else if (node.right === null) {
                return node.left;
            } else {
                node.value = this._minValue(node.right);
                node.right = this._deleteRecursively(node.right, node.value);
            }
        }

        return node;
    }

    private _minValue(node: TreeNode): number {
        let currentValue = node;
        while (currentValue && currentValue.left !== null) {
            currentValue = currentValue.left;
        }
        return currentValue.value;
    }

    transverseInOrder(): number[] {
        return this._transverseInOrderRecursively(this.root, []);
    }

    private _transverseInOrderRecursively(node: TreeNode | null, array: number[]): number[] {
        if (node !== null) {
            this._transverseInOrderRecursively(node.left, array);
            array.push(node.value);
            this._transverseInOrderRecursively(node.right, array);
        }
        return array;
    }
}