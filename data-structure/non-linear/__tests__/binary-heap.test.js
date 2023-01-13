const MaxBinaryHeap = require('../binary-heap');

it('insert', () => {
  const heap = new MaxBinaryHeap();

  heap.insert(5);
  heap.insert(2);
  heap.insert(8);
  heap.insert(1);

  expect(heap.values).toEqual([8, 2, 5, 1]);
});

it('extract', () => {
  const heap = new MaxBinaryHeap();

  heap.insert(5);
  heap.insert(2);
  heap.insert(8);
  heap.insert(1);

  expect(heap.extract()).toBe(8);
  expect(heap.extract()).toBe(5);
  expect(heap.extract()).toBe(2);
  expect(heap.extract()).toBe(1);
});
