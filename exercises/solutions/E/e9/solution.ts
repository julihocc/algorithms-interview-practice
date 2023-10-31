import {BinarySearchTree, TreeNode} from "./bst"

export class AVLTree extends BinarySearchTree {

    insert(value: number): void {
        super.insert(value);
        this.root = this._balanceNode(this.root, value);
    }

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

        
        y.left = z;
        z.right = T2;

        return y; 
    }

    private _rotateRight(y: TreeNode): TreeNode {
        let x = y.left!;
        let T2 = x.right;

        
        x.right = y;
        y.left = T2;

        return x; 
    }

    private _balanceNode(node: TreeNode | null, value: number): TreeNode | null {
        if (node === null) return node;

        
        let balance = this._getBalanceFactor(node);

        
        if (balance > 1) {
            if (value < node.left!.value) { 
                return this._rotateRight(node);
            } else { 
                node.left = this._rotateLeft(node.left!);
                return this._rotateRight(node);
            }
        }

        
        if (balance < -1) {
            if (value > node.right!.value) { 
                return this._rotateLeft(node);
            } else { 
                node.right = this._rotateRight(node.right!);
                return this._rotateLeft(node);
            }
        }

        return node; 
    }
}
