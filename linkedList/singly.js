/* 
1-- > 2-- > 3-- > 4-- > 5-- > null;

let singlyLinkedList = {
    head: {
        value: 1,
        next: {
            value: 2,
            next: {
                value: 3,
                next: {
                    value: 4,
                    next: null,
                },
            },
        },
    },
};
 */

class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
};

class MySinglyLinkedList {
    constructor(value) {
        this.head = {
            value: value,
            next: null,
        };

        this.tail = this.head;

        this.length = 1;
    }

    append(value) {
        const newNode = new Node(value);

        this.tail.next = newNode;
        this.tail = newNode;
        this.length++
    };

    prepend(value) {
        const newNode = new Node(value);

        newNode.next = this.head;
        this.head = newNode;

        this.length++;

        return this;
    };

    insert(index, value) {
        if(index >= this.length) {
            return this.append(value);
        }

        const newNode = new Node(value);
        const firstPointer = this.getTheIndex(index - 1);
        const holdingPointer = firstPointer.next;
        firstPointer.next = newNode;
        newNode.next = holdingPointer;

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
        }

        if(index === 0) {
            this.head = this.head.next;
            this.length--
        } else if(index === this.length - 1) {
            const firstPointer = this.getTheIndex(index - 1);
            firstPointer.next = null;
            
            this.tail = firstPointer;
            this.length--;
        } else {
            const firstPointer = this.getTheIndex(index - 1);
            const pointerRemoved = firstPointer.next;
            firstPointer.next = pointerRemoved.next;

            this.length--;
        }

        return this;
    }
};

let myLinkedList = new MySinglyLinkedList(1);
console.log(myLinkedList);

myLinkedList.append(2);
console.log(myLinkedList);
myLinkedList.append(3);
console.log(myLinkedList);

myLinkedList.prepend(0);
console.log(myLinkedList);

myLinkedList.insert(2, 5);
console.log(myLinkedList);

myLinkedList.remove(0);
console.log(myLinkedList);
myLinkedList.remove(5);
console.log(myLinkedList);

