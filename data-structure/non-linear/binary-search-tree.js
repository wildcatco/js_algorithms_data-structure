class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

class BinarySearchTree {
  constructor() {
    this.root = null;
  }

  insert(value) {
    const newNode = new Node(value);

    if (!this.root) {
      this.root = newNode;
    } else {
      let current = this.root;
      while (true) {
        if (value === current.value) {
          return;
        }
        if (value < current.value) {
          if (!current.left) {
            current.left = newNode;
            return;
          } else {
            current = current.left;
          }
        } else {
          if (!current.right) {
            current.right = newNode;
            return;
          } else {
            current = current.right;
          }
        }
      }
    }
  }

  find(value) {
    let current = this.root;
    while (current) {
      if (value === current.value) {
        return true;
      }
      current = value < current.value ? current.left : current.right;
    }

    return false;
  }

  bfs() {
    const q = [];
    const visited = [];

    this.root && q.push(this.root);
    while (q.length !== 0) {
      const dequeued = q.shift();

      visited.push(dequeued.value);

      dequeued.left && q.push(dequeued.left);
      dequeued.right && q.push(dequeued.right);
    }

    return visited;
  }

  dfsPreOrder() {
    const visited = [];

    const traverse = (node) => {
      visited.push(node.value);

      node.left && traverse(node.left);
      node.right && traverse(node.right);
    };

    this.root && traverse(this.root);

    return visited;
  }

  dfsPostOrder() {
    const visited = [];

    const traverse = (node) => {
      node.left && traverse(node.left);
      node.right && traverse(node.right);

      visited.push(node.value);
    };

    this.root && traverse(this.root);

    return visited;
  }

  dfsInOrder() {
    const visited = [];

    const traverse = (node) => {
      node.left && traverse(node.left);
      visited.push(node.value);
      node.right && traverse(node.right);
    };

    this.root && traverse(this.root);

    return visited;
  }
}

module.exports = BinarySearchTree;
