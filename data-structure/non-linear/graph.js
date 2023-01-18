// Unweighted, undirected graph
class Graph {
  constructor() {
    this.adjacencyList = {};
  }

  addVertex(vertex) {
    if (!this.adjacencyList[vertex]) {
      this.adjacencyList[vertex] = [];
    }
  }

  addEdge(vertex1, vertex2) {
    if (this.adjacencyList[vertex1] && this.adjacencyList[vertex2]) {
      this.adjacencyList[vertex1].push(vertex2);
      this.adjacencyList[vertex2].push(vertex1);
    }
  }

  removeEdge(vertex1, vertex2) {
    if (
      this.adjacencyList[vertex1].includes(vertex2) &&
      this.adjacencyList[vertex2].includes(vertex1)
    ) {
      this.adjacencyList[vertex1] = this.adjacencyList[vertex1].filter(
        (v) => v !== vertex2
      );
      this.adjacencyList[vertex2] = this.adjacencyList[vertex2].filter(
        (v) => v !== vertex1
      );
    }
  }

  removeVertex(vertexToRemove) {
    for (const vertex of this.adjacencyList[vertexToRemove]) {
      this.removeEdge(vertex, vertexToRemove);
    }

    delete this.adjacencyList[vertexToRemove];
  }

  dfsRecursive(start) {
    const result = [];
    const visited = {};

    const dfs = (vertex) => {
      if (!this.adjacencyList[vertex]) {
        return;
      }

      result.push(vertex);
      visited[vertex] = true;

      this.adjacencyList[vertex].forEach((neighbor) => {
        !visited[neighbor] && dfs(neighbor);
      });
    };
    dfs(start);

    return result;
  }

  dfsIterative(start) {
    if (!this.adjacencyList[start]) {
      return [];
    }

    const stack = [];
    const visited = {};
    const result = [];

    stack.push(start);
    visited[stack] = true;

    while (stack.length > 0) {
      const vertex = stack.pop();
      result.push(vertex);

      this.adjacencyList[vertex].forEach((v) => {
        if (!visited[v]) {
          visited[v] = true;
          stack.push(v);
        }
      });
    }

    return result;
  }

  bfs(start) {
    const q = [];
    const visited = {};
    const result = [];

    q.push(start);
    visited[start] = true;

    while (q.length > 0) {
      const vertex = q.shift();
      result.push(vertex);

      this.adjacencyList[vertex].forEach((neighbor) => {
        if (!visited[neighbor]) {
          visited[neighbor] = true;
          q.push(neighbor);
        }
      });
    }

    return result;
  }
}

module.exports = Graph;
