const DoublyLinkedList = require('../doubly-linked-list');

it('has initial state', () => {
  const list = new DoublyLinkedList();

  expect(list.getInfo()).toEqual({
    head: null,
    tail: null,
    length: 0,
    array: [],
  });
});

test('push', () => {
  const list = new DoublyLinkedList();

  list.push(1);
  expect(list.getInfo()).toEqual({
    head: 1,
    tail: 1,
    length: 1,
    array: [1],
  });

  list.push(2);
  list.push(3);
  list.push(4);
  expect(list.getInfo()).toEqual({
    head: 1,
    tail: 4,
    length: 4,
    array: [1, 2, 3, 4],
  });
});

test('pop', () => {
  const list = new DoublyLinkedList();
  list.initializeWithArray([1, 2, 3]);

  expect(list.pop().value).toBe(3);
  expect(list.getInfo()).toEqual({
    head: 1,
    tail: 2,
    length: 2,
    array: [1, 2],
  });

  list.pop();
  list.pop();

  expect(() => {
    list.pop();
  }).toThrow(new Error('List is empty'));
});

test('shift', () => {
  const list = new DoublyLinkedList();
  list.initializeWithArray([1, 2]);

  expect(list.shift().value).toBe(1);
  expect(list.getInfo()).toEqual({
    head: 2,
    tail: 2,
    length: 1,
    array: [2],
  });

  list.shift();

  expect(() => {
    list.shift();
  }).toThrow(new Error('List is empty'));
});

test('unshift', () => {
  const list = new DoublyLinkedList();

  list.unshift(3);
  list.unshift(2);
  list.unshift(1);

  expect(list.getInfo()).toEqual({
    head: 1,
    tail: 3,
    length: 3,
    array: [1, 2, 3],
  });
});

test('get', () => {
  const list = new DoublyLinkedList();
  list.initializeWithArray([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);

  expect(list.get(2).value).toBe(3);
  expect(list.get(7).value).toBe(8);

  expect(() => {
    list.get(-1);
  }).toThrow(new Error('Invalid index'));

  expect(() => {
    list.get(10);
  }).toThrow(new Error('Invalid index'));
});

test('set', () => {
  const list = new DoublyLinkedList();
  list.initializeWithArray([1, 2, 3]);

  list.set(1, 10);
  expect(list.getInfo()).toEqual({
    head: 1,
    tail: 3,
    length: 3,
    array: [1, 10, 3],
  });

  expect(() => {
    list.set(-1, 10);
  }).toThrow(new Error('Invalid index'));

  expect(() => {
    list.set(3, 10);
  }).toThrow(new Error('Invalid index'));
});

test('insert', () => {
  const list = new DoublyLinkedList();
  list.initializeWithArray([1, 2, 3]);

  list.insert(1, 10);
  expect(list.getInfo()).toEqual({
    head: 1,
    tail: 3,
    length: 4,
    array: [1, 10, 2, 3],
  });

  list.insert(0, 10);
  expect(list.getInfo()).toEqual({
    head: 10,
    tail: 3,
    length: 5,
    array: [10, 1, 10, 2, 3],
  });

  list.insert(5, 10);
  expect(list.getInfo()).toEqual({
    head: 10,
    tail: 10,
    length: 6,
    array: [10, 1, 10, 2, 3, 10],
  });

  expect(() => {
    list.insert(-1, 10);
  }).toThrow(new Error('Invalid index'));

  expect(() => {
    list.insert(7, 10);
  }).toThrow(new Error('Invalid index'));
});

test('remove', () => {
  const list = new DoublyLinkedList();
  list.initializeWithArray([1, 2, 3, 4, 5]);

  expect(list.remove(1).value).toBe(2);
  expect(list.getInfo()).toEqual({
    head: 1,
    tail: 5,
    length: 4,
    array: [1, 3, 4, 5],
  });

  expect(list.remove(0).value).toBe(1);
  expect(list.getInfo()).toEqual({
    head: 3,
    tail: 5,
    length: 3,
    array: [3, 4, 5],
  });

  expect(list.remove(2).value).toBe(5);
  expect(list.getInfo()).toEqual({
    head: 3,
    tail: 4,
    length: 2,
    array: [3, 4],
  });

  expect(() => {
    list.remove(3);
  }).toThrow(new Error('Invalid index'));

  list.remove(0);
  list.remove(0);

  expect(() => {
    list.remove(0);
  }).toThrow(new Error('List is empty'));
});
