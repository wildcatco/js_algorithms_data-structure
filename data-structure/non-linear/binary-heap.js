class MaxBinaryHeap {
  constructor() {
    this.values = [];
  }

  insert(value) {
    this.values.push(value);
    this.bubbleUp();
  }

  bubbleUp() {
    let currentIndex = this.values.length - 1;
    const value = this.values[currentIndex];

    while (currentIndex !== 0) {
      const parentIndex = Math.floor((currentIndex - 1) / 2);
      const parentValue = this.values[parentIndex];
      if (parentValue >= value) {
        break;
      }
      this.values[currentIndex] = parentValue;
      this.values[parentIndex] = value;
      currentIndex = parentIndex;
    }
  }

  extract() {
    const removed = this.values[0];
    this.values[0] = this.values.pop();
    this.sinkDown();
    return removed;
  }

  sinkDown() {
    let index = 0;
    const value = this.values[index];
    const length = this.values.length;

    while (true) {
      const leftChildIndex = 2 * index + 1;
      const rightChildIndex = 2 * index + 2;
      let swap = null;

      if (leftChildIndex < length && this.values[leftChildIndex] > value) {
        swap = leftChildIndex;
      }

      if (
        rightChildIndex < length &&
        this.values[rightChildIndex] > value &&
        this.values[leftChildIndex] < this.values[rightChildIndex]
      ) {
        swap = rightChildIndex;
      }

      if (!swap) {
        break;
      }

      this.values[index] = this.values[swap];
      this.values[swap] = value;
      index = swap;
    }
  }
}

module.exports = MaxBinaryHeap;

const heap = new MaxBinaryHeap();

heap.insert(5);
heap.insert(2);
heap.insert(8);
heap.insert(1);

console.log(heap.extract());
console.log(heap.extract());
console.log(heap.extract());
console.log(heap.extract());
