const Queue = require('../queue');

it('first in first out', () => {
  const q = new Queue();

  q.enqueue('first');
  q.enqueue('second');
  q.enqueue('third');

  expect(q.dequeue().value).toBe('first');
  expect(q.dequeue().value).toBe('second');
  expect(q.dequeue().value).toBe('third');
});
