// Using array
const stack = [];

stack.push('google');
stack.push('instagram');
stack.push('youtube');

console.log(stack.pop()); // youtube
console.log(stack.pop()); // instagram
console.log(stack.pop()); // google

// Using linked list
class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class Stack {
  constructor() {
    this.first = null;
    this.last = null;
    this.size = 0;
  }

  push(value) {
    const newNode = new Node(value);

    if (this.size === 0) {
      this.first = newNode;
      this.last = newNode;
    } else {
      newNode.next = this.first;
      this.first = newNode;
    }

    this.size++;
  }

  pop() {
    if (this.size === 0) {
      return null;
    }

    const removed = this.first;
    if (this.size === 1) {
      this.first = null;
      this.last = null;
    } else {
      this.first = removed.next;
      removed.next = null;
    }

    this.size--;

    return removed;
  }
}

module.exports = Stack;
