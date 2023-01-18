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
      if (parentNode.priority <= currentNode.priority) {
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
        this.values[leftChildIndex].priority < currentNode.priority
      ) {
        swap = leftChildIndex;
      }

      if (
        rightChildIndex < length &&
        this.values[rightChildIndex].priority < currentNode.priority &&
        this.values[leftChildIndex].priority >
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

class WeightedGraph {
  constructor() {
    this.adjacencyList = {};
  }

  addVertex(vertex) {
    if (!this.adjacencyList[vertex]) {
      this.adjacencyList[vertex] = [];
    }
  }

  addEdge(vertex1, vertex2, weight) {
    if (this.adjacencyList[vertex1] && this.adjacencyList[vertex2]) {
      this.adjacencyList[vertex1].push({ node: vertex2, weight });
      this.adjacencyList[vertex2].push({ node: vertex1, weight });
    }
  }

  dijkstra(start, end) {
    const nodes = new PriorityQueue();
    const distances = {};
    const previous = {};

    // build up initial state
    for (let vertex in this.adjacencyList) {
      if (vertex === start) {
        distances[vertex] = 0;
        nodes.enqueue(vertex, 0);
      } else {
        distances[vertex] = Infinity;
        nodes.enqueue(vertex, Infinity);
      }
      previous[vertex] = null;
    }

    // as long as there is something to visit
    while (nodes.values.length > 0) {
      const smallest = nodes.dequeue().value;
      if (smallest === end) {
        // We are done!
        // build up path
        const path = [];
        let node = smallest;
        while (true) {
          path.push(node);
          if (node === start) {
            break;
          }
          node = previous[node];
        }

        path.reverse();
        return path;
      }

      if (smallest && distances[smallest] !== Infinity) {
        this.adjacencyList[smallest].forEach((neighbor) => {
          const candidate = distances[smallest] + neighbor.weight;
          if (candidate < distances[neighbor.node]) {
            distances[neighbor.node] = candidate;
            previous[neighbor.node] = smallest;
            nodes.enqueue(neighbor.node, candidate);
          }
        });
      }
    }
  }
}

module.exports = WeightedGraph;

const graph = new WeightedGraph();
graph.addVertex('A');
graph.addVertex('B');
graph.addVertex('C');
graph.addVertex('D');
graph.addVertex('E');
graph.addVertex('F');

graph.addEdge('A', 'B', 4);
graph.addEdge('A', 'C', 2);
graph.addEdge('B', 'E', 3);
graph.addEdge('C', 'D', 2);
graph.addEdge('C', 'F', 4);
graph.addEdge('D', 'E', 3);
graph.addEdge('D', 'F', 1);
graph.addEdge('E', 'F', 1);

console.log(graph.dijkstra('A', 'E'));
