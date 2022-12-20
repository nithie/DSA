class Node  {
    constructor(value) {
        this.val = value;
        this.left = null;
        this.right = null;
    }
}

class BinarySearchTree {
    constructor() {
        this.root = null;
    }

    insert(value) {
        var newNode = new Node(value);
        if (this.root == null) {
            this.root = newNode;
            return this;
        } else {
            var current = this.root;
            while(true) {
                if (newNode.val < current.val) {
                    if (current.left == null) {
                        current.left = newNode;
                        return this;
                    } else {
                        current = current.left;
                    }
                } else {
                    if (current.right == null) {
                        current.right = newNode;
                        return this;
                    } else {
                        current = current.right;
                    }
                }
            }
        }
    }

    find(value) { 
        if (!this.root) {
            return false;
        }
        var current = this.root;
        var found = false;
        while(current && !found) {
            if (value < current.val) {
                if (current.left == null){
                    return false;
                } else if (value == current.val) {
                    found = true;
                } else {
                    current = current.left;
                }
            } else {
                if (current.right == null){
                    return false;
                } else if (value == current.val) {
                    found = true;
                } else {
                    current = current.right;
                }
            }
        }
        if (found) {
            return current;
        }

        return false;
    }

    breathFirstSearch() {
        if (!this.root) {
            return [];
        }
        var node = this.root;
        var data = [];
        var queue = [];
        queue.push(node);
        while(queue.length) {
            node = queue.shift();
            data.push(node);
            if (node.left !== null) {
                queue.push(node.left);
            }
            if (node.right !== null) {
                queue.push(node.right);
            }
        }
        return data;
    }



    depthFirstSearchPreOrder() {
        if (!this.root) {
            return [];
        }
        var visited = [];
        var current = this.root;
        function traverse(node) {
            visited.push(node);
            if (node.left !== null) {
                traverse(node.left);
            }
            if (node.right !== null) {
                traverse(node.right);
            }
        }
        traverse(current);
        return visited;
    }

    depthFirstSearchPostOrder() {
        if (!this.root) {
            return [];
        }
        var visited = [];
        var current = this.root;
        function traverse(node) {   
            if (node.left !== null) {
                traverse(node.left);
            }
            if (node.right !== null) {
                traverse(node.right);
            }
            visited.push(node);
        }
        traverse(current);
        return visited;
    }

    depthFirstSearchInOrder() {
        if (!this.root) {
            return [];
        }
        var visited = [];
        var current = this.root;
        function traverse(node) {   
            if (node.left !== null) {
                traverse(node.left);
            }
            visited.push(node);
            if (node.right !== null) {
                traverse(node.right);
            }
         }
        traverse(current);
        return visited;
    }
}