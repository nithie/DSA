class Node {
    constructor(val) {
        this.value = val;
        this.next = null;
    }
}

class SinglyLinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
        this.length = 0;
    }

    push(val) {
        const newNode = new Node(val);
        if (!this.head) {
            this.head = newNode;
            this.tail = newNode;
            this.length++;
        } else {
            this.tail.next = newNode;
            this.tail = newNode;
            this.length++;
        }
    }

    pop() {
        if (!this.head) {
            return undefined;
        }
        if (this.length === 1) {
            this.head = null;
            this.tail = null;
        } else {
            let current = this.head;
            let newTail = current;
            while(current != null) {   
                newTail = current;         
                current = current.next;
            }        
            this.tail = newTail;
            this.tail.next = null;
            if (this.head.next === newTail) {
                this.head.next = prev;
            }
        }
        this.length--;
    }

    shift() {
        if (!this.head){
            return undefined;
        }
        let removed = this.head;
        this.head = removed.next;
        if (this.length === 1) {
            this.tail = null;
        } 
        this.length--;
        return removed;
    }

    unshift(val) {
        const newNode = new Node(val);
        if (!this.head){
            return undefined;
        }
        if (!this.length) {
            this.head = newNode;
            this.tail = newNode;
        }
        let oldHead = this.head;
        this.head = newNode;
        this.head.next = oldHead;
        this.length++;
    }
}

const list = new SinglyLinkedList();
list.push("Hello");
list.push("this");
list.shift();
list.unshift("Hi");
console.log(list);