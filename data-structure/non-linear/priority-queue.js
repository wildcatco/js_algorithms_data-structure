class Node {
  constructor(value, priority) {
    this.value = value;
    this.priority = priority;
  }
}

class PriorityQueue {
  constructor() {
    this.values = [];
  }

  enqueue(value, priority) {
    const newNode = new Node(value, priority);
    this.values.push(newNode);
    this.bubbleUp();
  }

  bubbleUp() {
    let currentIndex = this.values.length - 1;
    const currentNode = this.values[currentIndex];

    while (currentIndex !== 0) {
      const parentIndex = Math.floor((currentIndex - 1) / 2);
      const parentNode = this.values[parentIndex];
      if (parentNode.priority >= currentNode.priority) {
        break;
      }
      this.values[currentIndex] = parentNode;
      this.values[parentIndex] = currentNode;
      currentIndex = parentIndex;
    }
  }

  dequeue() {
    const removed = this.values[0];
    this.values[0] = this.values.pop();
    this.sinkDown();
    return removed;
  }

  sinkDown() {
    let index = 0;
    const currentNode = this.values[index];
    const length = this.values.length;

    while (true) {
      const leftChildIndex = 2 * index + 1;
      const rightChildIndex = 2 * index + 2;
      let swap = null;

      if (
        leftChildIndex < length &&
        this.values[leftChildIndex].priority > currentNode.priority
      ) {
        swap = leftChildIndex;
      }

      if (
        rightChildIndex < length &&
        this.values[rightChildIndex].priority > currentNode.priority &&
        this.values[leftChildIndex].priority <
          this.values[rightChildIndex].priority
      ) {
        swap = rightChildIndex;
      }

      if (!swap) {
        break;
      }

      this.values[index] = this.values[swap];
      this.values[swap] = currentNode;
      index = swap;
    }
  }
}

module.exports = PriorityQueue;
