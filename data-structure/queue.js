// Using array
const q = [];

q.push('first');
q.push('second');
q.push('third');

// O(n)
console.log(q.shift()); // first
console.log(q.shift()); // second
console.log(q.shift()); // third

// Using linked list
class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class Queue {
  constructor() {
    this.first = null;
    this.last = null;
    this.size = 0;
  }

  enqueue(value) {
    const newNode = new Node(value);

    if (this.size === 0) {
      this.first = newNode;
      this.last = newNode;
    } else {
      this.last.next = newNode;
      this.last = newNode;
    }

    this.size++;
  }

  dequeue() {
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

module.exports = Queue;
