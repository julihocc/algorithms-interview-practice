import { TreeNode, BinarySearchTree } from "./bst"

export class AVLTree extends BinarySearchTree {

    private _getHeight(node: TreeNode | null): number {
        if (node === null) {
            return 0;
        }
        return Math.max(this._getHeight(node.left), this._getHeight(node.right)) + 1;
    }

    private _getBalanceFactor(node: TreeNode | null): number {
        if (node === null) {
            return 0;
        }
        return this._getHeight(node.left) - this._getHeight(node.right);
    }

    private _rotateLeft(z: TreeNode): TreeNode {
        let y = z.right!;
        let T2 = y.left;

        // Rotate
        y.left = z;
        z.right = T2;

        return y; // y becomes the new root
    }

    private _rotateRight(y: TreeNode): TreeNode {
        let x = y.left!;
        let T2 = x.right;

        // Rotate
        x.right = y;
        y.left = T2;

        return x; // x becomes the new root
    }

    insert(value: number): void {
        super.insert(value);
        this.root = this._balanceNode(this.root, value);
    }

    private _balanceNode(node: TreeNode | null, value: number): TreeNode | null {
        if (node === null) return node;

        // Balance logic
        let balance = this._getBalanceFactor(node);

        // Left heavy
        if (balance > 1) {
            if (value < node.left!.value) { // Left-Left
                return this._rotateRight(node);
            } else { // Left-Right
                node.left = this._rotateLeft(node.left!);
                return this._rotateRight(node);
            }
        }

        // Right heavy
        if (balance < -1) {
            if (value > node.right!.value) { // Right-Right
                return this._rotateLeft(node);
            } else { // Right-Left
                node.right = this._rotateRight(node.right!);
                return this._rotateLeft(node);
            }
        }

        return node; // balanced node
    }
}
