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
}

module.exports = BinarySearchTree;
