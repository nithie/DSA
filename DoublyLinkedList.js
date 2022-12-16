class Node {
    constructor(val) {
        this.val = val;
        this.next = null;
        this.prev = null;
    }
}

class DoublyLinkedList {
    constructor() {
        this.length = 0;
        this.head = null;
        this.tail = null;
    }

    push(val) {
        const newNode = new Node(val);
        if(!this.head) {
            this.head = newNode;
            this.tail  = newNode;
        } else {
            newNode.prev = this.tail;
            this.tail.next = newNode;
            this.tail = newNode;
            
        }
        this.length++;
        return this;
    }

    pop() {
        if (this.length == 0) return undefined;
        var popedNode = this.tail;
        if (this.length == 1) {
            this.tail = null;
            this.head = null;
        } else {
            this.tail = popedNode.prev;
            popedNode.prev = null;
            this.tail.next = null;
        }
        this.length--;
        return popedNode;
    }

    shift() {
        if (!this.head) return undefined;
        var removedNode =  this.tail;
        if (this.length == 1) {
            this.tail = null;
            this.head = null;
        } else {
            this.head = removedNode.next;
            removedNode.next =  null;
            this.head.prev = null;
        }
        this.length --;
        return removedNode;        
    }

    unshift(val) {
        var newNode = Node(val);
        if (this.length == 0) {
            this.head = newNode;
            this.tail = newNode;
        } else {
            var oldHead = this.head;
            oldHead.prev = newNode;
            this.head = newNode;
            this.head.next = oldHead;
        }
    }

    get(index) {
        if (index < 0 || index >= this.length) return undefined;        
        if (index > (this.length / 2)) {
            var iterator = this.length - 1;
            var current = this.tail;
            while(iterator != index) {
                current = current.prev;
                iterator--;
            }
            return current.val;
        } else {
            var iterator = 0;
            var current = this.head;
            while(iterator != index) {
                current = current.next;
                iterator++;
            }
            return current.val;
        }
    }

    get(index, val) {
        var foundNode  = get(index);
        if (foundNode) {
            foundNode.val = val;
            return true;
        }     
        return false;   
    }

    insert(index, val) {
        if (index < 0 || index > this.length) return false;
        if (index == 0) this.unshift(val);
        if (index == this.length) this.push(val);
        var foundNode = get(index - 1);
        if (foundNode) {
            var newNode = Node(val);
            newNode.next = foundNode;
            newNode.prev = foundNode.prev;
            foundNode.prev = newNode;
            this.length++;
            return true;            
        }
        return false;
    }

    remove(index) {
        if (index < 0 || index >= this.length) return false;
        if (index == 0) this.shift();
        if (index == this.length - 1) this.pop();
        var foundNode = get(index);
        var previous = foundNode. prev;
        var next = foundNode.next;
        previous.next = next;
        next.prev = previous;
        this.length--;
        foundNode.prev = null;
        foundNode.next = null;
        return foundNode;
    }
}