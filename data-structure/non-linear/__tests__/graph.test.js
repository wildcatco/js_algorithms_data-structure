const Graph = require('../graph');

it('addVertex', () => {
  const g = new Graph();

  g.addVertex('Tokyo');

  expect(g.adjacencyList['Tokyo']).toEqual([]);
});

it('addEdge', () => {
  const g = new Graph();

  g.addVertex('Tokyo');
  g.addVertex('Dallas');
  g.addVertex('Aspen');

  g.addEdge('Tokyo', 'Dallas');
  g.addEdge('Dallas', 'Aspen');

  expect(g.adjacencyList['Tokyo']).toContain('Dallas');
  expect(g.adjacencyList['Dallas']).toContain('Tokyo');
  expect(g.adjacencyList['Dallas']).toContain('Aspen');
  expect(g.adjacencyList['Aspen']).toContain('Dallas');
});

it('removeEdge', () => {
  const g = new Graph();

  g.addVertex('Tokyo');
  g.addVertex('Dallas');

  g.addEdge('Tokyo', 'Dallas');
  expect(g.adjacencyList['Tokyo']).toContain('Dallas');
  expect(g.adjacencyList['Dallas']).toContain('Tokyo');

  g.removeEdge('Tokyo', 'Dallas');
  expect(g.adjacencyList['Tokyo']).not.toContain('Dallas');
  expect(g.adjacencyList['Dallas']).not.toContain('Tokyo');
});

it('removeVertex', () => {
  const g = new Graph();

  g.addVertex('Tokyo');
  g.addVertex('Dallas');
  g.addVertex('Aspen');

  g.addEdge('Tokyo', 'Dallas');
  g.addEdge('Tokyo', 'Aspen');
  g.addEdge('Dallas', 'Aspen');

  g.removeVertex('Dallas');

  expect(g.adjacencyList['Tokyo']).toEqual(['Aspen']);
  expect(g.adjacencyList['Aspen']).toEqual(['Tokyo']);
  expect(g.adjacencyList['Dallas']).toBeUndefined();
});

it('dfsRecursive', () => {
  const g = new Graph();

  g.addVertex('A');
  g.addVertex('B');
  g.addVertex('C');
  g.addVertex('D');
  g.addVertex('E');
  g.addVertex('F');

  g.addEdge('A', 'B');
  g.addEdge('A', 'C');
  g.addEdge('B', 'D');
  g.addEdge('C', 'E');
  g.addEdge('D', 'E');
  g.addEdge('D', 'F');
  g.addEdge('E', 'F');

  //          A
  //        /  \
  //       B   C
  //      |    |
  //     D ---E
  //      \  /
  //       F

  expect(g.dfsRecursive('A')).toEqual(['A', 'B', 'D', 'E', 'C', 'F']);
});

it('dfsIterative', () => {
  const g = new Graph();

  g.addVertex('A');
  g.addVertex('B');
  g.addVertex('C');
  g.addVertex('D');
  g.addVertex('E');
  g.addVertex('F');

  g.addEdge('A', 'B');
  g.addEdge('A', 'C');
  g.addEdge('B', 'D');
  g.addEdge('C', 'E');
  g.addEdge('D', 'E');
  g.addEdge('D', 'F');
  g.addEdge('E', 'F');

  //          A
  //        /  \
  //       B   C
  //      |    |
  //     D ---E
  //      \  /
  //       F

  expect(g.dfsIterative('A')).toEqual(['A', 'C', 'E', 'F', 'D', 'B']);
});

it('bfs', () => {
  const g = new Graph();

  g.addVertex('A');
  g.addVertex('B');
  g.addVertex('C');
  g.addVertex('D');
  g.addVertex('E');
  g.addVertex('F');

  g.addEdge('A', 'B');
  g.addEdge('A', 'C');
  g.addEdge('B', 'D');
  g.addEdge('C', 'E');
  g.addEdge('D', 'E');
  g.addEdge('D', 'F');
  g.addEdge('E', 'F');

  //          A
  //        /  \
  //       B   C
  //      |    |
  //     D ---E
  //      \  /
  //       F

  expect(g.bfs('A')).toEqual(['A', 'B', 'C', 'D', 'E', 'F']);
});
