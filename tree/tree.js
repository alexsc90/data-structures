class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
};

class BinarySearchTree {
    constructor() {
        this.root = null;
    }

    insert(value) {
        const newNode = new Node(value);
        if(this.root === null) {
            this.root = newNode;
        } else {
            let currentNode = this.root;

            while(true) {
                if(value < currentNode.value) {
                    if(!currentNode.left) {
                        currentNode.left = newNode;
                        return this;
                    }

                    currentNode = currentNode.left;
                } else {
                    if(!currentNode.right) {
                        currentNode.right = newNode;
                        return this;
                    }

                    currentNode = currentNode.right;
                }
            }
        }
    };

    search(value) {
        let currentNode = this.root;

        while(currentNode && currentNode.value !== value) {
            if(value < currentNode.value) {
                currentNode = currentNode.left
            } else if(value > currentNode.value) {
                currentNode = currentNode.right
            }
        }

        if(!currentNode) return false;

        return currentNode;
    }
};

const tree = new BinarySearchTree();
console.log(tree);

tree.insert(10);
console.log(tree);

tree.insert(4);
console.log(tree);

tree.insert(20);
console.log(tree);

tree.insert(170);
console.log(tree);

console.log(tree.search(20));
