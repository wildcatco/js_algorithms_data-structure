const BinarySearchTree = require('../binary-search-tree');

it('insert', () => {
  const bst = new BinarySearchTree();

  bst.insert(5);
  bst.insert(2);
  bst.insert(3);
  bst.insert(7);
  bst.insert(6);
  bst.insert(1);

  expect(bst.root.value).toBe(5);
  expect(bst.root.left.value).toBe(2);
  expect(bst.root.right.value).toBe(7);
  expect(bst.root.left.left.value).toBe(1);
  expect(bst.root.left.right.value).toBe(3);
  expect(bst.root.right.left.value).toBe(6);
});

it('find', () => {
  const bst = new BinarySearchTree();

  bst.insert(5);
  bst.insert(2);
  bst.insert(3);
  bst.insert(7);
  bst.insert(6);
  bst.insert(1);

  expect(bst.find(5)).toBe(true);
  expect(bst.find(2)).toBe(true);
  expect(bst.find(8)).toBe(false);
  expect(bst.find(4)).toBe(false);
});

it('bfs', () => {
  const bst = new BinarySearchTree();

  bst.insert(5);
  bst.insert(2);
  bst.insert(3);
  bst.insert(7);
  bst.insert(6);
  bst.insert(1);

  expect(bst.bfs()).toEqual([5, 2, 7, 1, 3, 6]);
});

it('dfs - pre order', () => {
  const bst = new BinarySearchTree();

  bst.insert(5);
  bst.insert(2);
  bst.insert(3);
  bst.insert(7);
  bst.insert(6);
  bst.insert(1);

  expect(bst.dfsPreOrder()).toEqual([5, 2, 1, 3, 7, 6]);
});

it('dfs - post order', () => {
  const bst = new BinarySearchTree();

  bst.insert(5);
  bst.insert(2);
  bst.insert(3);
  bst.insert(7);
  bst.insert(6);
  bst.insert(1);

  expect(bst.dfsPostOrder()).toEqual([1, 3, 2, 6, 7, 5]);
});
