// const arr = ["Alejandro", "Daniela", "Carlos"];

class MyArray {
    constructor() {
        this.length = 0;
        this.data = {};
    }

    get(index) {
        return this.data[index];
    };

    push(item) {
        this.data[this.length] = item;
        this.length++;
        return this.data;
    };

    pop() {
        const lastItem = this.data[this.length -1];
        delete this.data[this.length -1];
        this.length--;
        return lastItem
    };

    unshift(item) {
        this.length++

        for (let i = this.length -1; i >= 0; i--){
        this.data[i] = this.data[i - 1];
        }

        this.data[0] = item
        return this.data
    };

    shift() {
        const firstItem = this.data[0];
        delete this.data[0];
        this.length--;

        return firstItem;
    }

    delete(index) {
        const item = this.data[index];
        this.shiftIndex(index);

        return item;
    };

    shiftIndex(index) {
        for(let i = index; i < this.length; i++) {
            this.data[i] = this.data[i + 1];
        }

        delete this.data[this.length - 1];
        this.length--;
    };

};

const myArray = new MyArray();
myArray.push('Alejandro');
myArray.push('Diego');
myArray.push('Nara');
myArray.push('Daniela');
myArray.push('Carlos');
console.log(myArray);
myArray.pop();
console.log(myArray)
myArray.delete(2);
console.log(myArray);
myArray.unshift('Nara')
console.log(myArray);
myArray.shift();
console.log(myArray);
