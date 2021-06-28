class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
        this.prev = null;
    }
};

class MyDoublyLinkedList {
    constructor(value) {
        this.head = {
            value: value,
            next: null,
            prev: null,
        };

        this.tail = this.head;

        this.length = 1;
    }

    append(value) {
        const newNode = new Node(value);
        newNode.prev = this.tail;
        this.tail.next = newNode;
        this.tail = newNode;

        this.length++;

        return this;
    };

    prepend(value) {
        const newNode = new Node(value);
        this.head.prev = newNode;
        newNode.next = this.head;
        this.head = newNode;

        this.length++;

        return this;
    };

    insert(index, value) {
        if(index >= this.length) {
            return this.append(value);
        } else if(index === 0) {
            return this.prepend(value);
        }

        let newNode = new Node(value);
        let previousPointer = this.getTheIndex(index - 1);
        let nextPointer = previousPointer.next;
        newNode.prev = previousPointer;
        newNode.next = nextPointer;
        previousPointer.next = newNode;
        nextPointer.prev = newNode;

        this.length++;

        return this;
    };

    getTheIndex(index) {
        let counter = 0;
        let currentNode = this.head;

        while(counter !== index) {
            currentNode = currentNode.next;
            counter++;
        }

        return currentNode;
    };

    remove(index) {
        if(index > this.length || index < 0) {
            console.log('Out of bounds');
            return;
        }

        let indexToRemove = this.getTheIndex(index);
        let nextPointer = indexToRemove.next;
        let previousPointer = indexToRemove.prev;

        if(previousPointer && nextPointer) {
            previousPointer.next = nextPointer;
            nextPointer.prev = previousPointer;
        } else if(!previousPointer) {
            nextPointer.prev = null;
            this.head = nextPointer;
        } else if(!nextPointer) {
            previousPointer.next = null;
            this.tail = previousPointer
        }

        this.length--;

        return this;
    }
};

let myDoublyLinkedList = new MyDoublyLinkedList(1);
console.log(myDoublyLinkedList);

myDoublyLinkedList.append(2);
console.log(myDoublyLinkedList);

myDoublyLinkedList.prepend(0);
console.log(myDoublyLinkedList);

myDoublyLinkedList.insert(3, 6);
console.log(myDoublyLinkedList);

myDoublyLinkedList.remove(0);
console.log(myDoublyLinkedList);
