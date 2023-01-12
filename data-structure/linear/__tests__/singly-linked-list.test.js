const SinglyLinkedList = require('../singly-linked-list');

it('has initial state', () => {
  const list = new SinglyLinkedList();

  expect(list.getInfo()).toEqual({
    head: null,
    tail: null,
    length: 0,
    array: [],
  });
});

test('push', () => {
  const list = new SinglyLinkedList();

  list.push(1);
  expect(list.getInfo()).toEqual({
    head: 1,
    tail: 1,
    length: 1,
    array: [1],
  });

  list.push(2);
  expect(list.getInfo()).toEqual({
    head: 1,
    tail: 2,
    length: 2,
    array: [1, 2],
  });
});

test('initializeWithArray', () => {
  const list = new SinglyLinkedList();
  list.initializeWithArray([1, 2, 3, 4, 5]);

  expect(list.getInfo()).toEqual({
    head: 1,
    tail: 5,
    length: 5,
    array: [1, 2, 3, 4, 5],
  });

  list.initializeWithArray([1, 2, 3]);
  expect(list.getInfo()).toEqual({
    head: 1,
    tail: 3,
    length: 3,
    array: [1, 2, 3],
  });
});

test('pop', () => {
  const list = new SinglyLinkedList();
  list.initializeWithArray([1, 2, 3, 4]);

  expect(list.pop().value).toBe(4);
  expect(list.getInfo()).toEqual({
    head: 1,
    tail: 3,
    length: 3,
    array: [1, 2, 3],
  });

  list.pop();
  list.pop();
  list.pop();

  expect(() => {
    list.pop();
  }).toThrowError(new Error('List is empty'));
});

test('shift', () => {
  const list = new SinglyLinkedList();
  list.initializeWithArray([1, 2, 3, 4]);

  expect(list.shift().value).toBe(1);
  expect(list.getInfo()).toEqual({
    head: 2,
    tail: 4,
    length: 3,
    array: [2, 3, 4],
  });

  list.shift();
  list.shift();
  list.shift();
  expect(() => {
    list.shift();
  }).toThrow(new Error('List is empty'));
});

test('unshift', () => {
  const list = new SinglyLinkedList();

  list.unshift(4);
  list.unshift(3);

  expect(list.getInfo()).toEqual({
    head: 3,
    tail: 4,
    length: 2,
    array: [3, 4],
  });
});

test('get', () => {
  const list = new SinglyLinkedList();
  list.initializeWithArray([1, 2, 3, 4, 5]);

  expect(list.get(2).value).toEqual(3);

  expect(() => {
    list.get(-1);
  }).toThrow(new Error('Invalid index'));

  expect(() => {
    list.get(5);
  }).toThrow(new Error('Invalid index'));
});

test('set', () => {
  const list = new SinglyLinkedList();
  list.initializeWithArray([1, 2, 3, 4, 5]);

  list.set(2, 10);
  expect(list.getInfo()).toEqual({
    head: 1,
    tail: 5,
    length: 5,
    array: [1, 2, 10, 4, 5],
  });

  list.set(4, 10);
  expect(list.getInfo()).toEqual({
    head: 1,
    tail: 10,
    length: 5,
    array: [1, 2, 10, 4, 10],
  });

  expect(() => {
    list.set(-1, 10);
  }).toThrow(new Error('Invalid index'));

  expect(() => {
    list.set(5, 10);
  }).toThrow(new Error('Invalid index'));
});

test('insert', () => {
  const list = new SinglyLinkedList();
  list.initializeWithArray([1, 2, 3, 4, 5]);

  list.insert(2, 10);
  expect(list.getInfo()).toEqual({
    head: 1,
    tail: 5,
    length: 6,
    array: [1, 2, 10, 3, 4, 5],
  });

  list.insert(0, 10);
  expect(list.getInfo()).toEqual({
    head: 10,
    tail: 5,
    length: 7,
    array: [10, 1, 2, 10, 3, 4, 5],
  });

  list.insert(7, 10);
  expect(list.getInfo()).toEqual({
    head: 10,
    tail: 10,
    length: 8,
    array: [10, 1, 2, 10, 3, 4, 5, 10],
  });

  expect(() => {
    list.insert(-1);
  }).toThrow(new Error('Invalid index'));

  expect(() => {
    list.insert(9);
  }).toThrow(new Error('Invalid index'));
});

test('remove', () => {
  const list = new SinglyLinkedList();
  list.initializeWithArray([1, 2, 3, 4, 5]);

  expect(list.remove(2)).toBe(3);
  expect(list.getInfo()).toEqual({
    head: 1,
    tail: 5,
    length: 4,
    array: [1, 2, 4, 5],
  });

  expect(list.remove(0)).toBe(1);
  expect(list.getInfo()).toEqual({
    head: 2,
    tail: 5,
    length: 3,
    array: [2, 4, 5],
  });

  expect(list.remove(2)).toBe(5);
  expect(list.getInfo()).toEqual({
    head: 2,
    tail: 4,
    length: 2,
    array: [2, 4],
  });

  expect(() => {
    list.remove(-1);
  }).toThrow(new Error('Invalid index'));

  expect(() => {
    list.remove(2);
  }).toThrow(new Error('Invalid index'));
});

test('reverse', () => {
  let list = new SinglyLinkedList();
  list.initializeWithArray([1, 2, 3, 4, 5]);

  list.reverse();
  expect(list.getInfo()).toEqual({
    head: 5,
    tail: 1,
    length: 5,
    array: [5, 4, 3, 2, 1],
  });

  list.initializeWithArray([]);
  list.reverse();
  expect(list.getInfo()).toEqual({
    head: null,
    tail: null,
    length: 0,
    array: [],
  });

  list.initializeWithArray([1]);
  list.reverse();
  expect(list.getInfo()).toEqual({
    head: 1,
    tail: 1,
    length: 1,
    array: [1],
  });
});
