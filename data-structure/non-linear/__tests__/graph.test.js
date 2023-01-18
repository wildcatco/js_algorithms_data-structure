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
