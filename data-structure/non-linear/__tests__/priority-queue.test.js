const PriorityQueue = require('../priority-queue');

it('queue and dequeue', () => {
  const q = new PriorityQueue();

  q.enqueue('common cold', 1);
  q.enqueue('gunshot wound', 5);
  q.enqueue('high fever', 2);

  expect(q.dequeue().value).toBe('gunshot wound');
  expect(q.dequeue().value).toBe('high fever');
  expect(q.dequeue().value).toBe('common cold');
});
