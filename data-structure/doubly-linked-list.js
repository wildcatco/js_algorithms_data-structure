class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
    this.prev = null;
  }
}

class DoublyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  initializeWithArray(array) {
    this.head = null;
    this.tail = null;
    this.length = 0;

    for (const el of array) {
      this.push(el);
    }
  }

  getInfo() {
    if (this.length === 0) {
      return {
        head: null,
        tail: null,
        length: 0,
        array: [],
      };
    }

    const array = [];
    let current = this.head;

    while (current) {
      array.push(current.value);
      current = current.next;
    }

    return {
      head: this.head.value,
      tail: this.tail.value,
      length: this.length,
      array,
    };
  }

  push(value) {
    const newNode = new Node(value);

    if (this.length === 0) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail.next = newNode;
      newNode.prev = this.tail;

      this.tail = newNode;
    }
    this.length++;
  }

  pop() {
    if (this.length === 0) {
      throw new Error('List is empty');
    }

    const removed = this.tail;
    if (this.length === 1) {
      this.head = null;
      this.tail = null;
    } else {
      this.tail = removed.prev;
      this.tail.next = null;
      removed.prev = null; // don't forget!
    }

    this.length--;

    return removed;
  }

  shift() {
    if (this.length === 0) {
      throw new Error('List is empty');
    }

    const removed = this.head;
    if (this.length === 1) {
      this.head = null;
      this.tail = null;
    } else {
      this.head = removed.next;
      this.head.prev = null;
      removed.next = null;
    }

    this.length--;

    return removed;
  }

  unshift(value) {
    const newNode = new Node(value);

    if (this.length === 0) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.head.prev = newNode;
      newNode.next = this.head;
      this.head = newNode;
    }
    this.length++;
  }

  get(index) {
    if (index < 0 || index > this.length - 1) {
      throw new Error('Invalid index');
    }

    let current;
    if (index < this.length / 2) {
      current = this.head;
      for (let i = 0; i < index; i++) {
        current = current.next;
      }
    } else {
      current = this.tail;
      for (let i = 0; i < this.length - index - 1; i++) {
        current = current.prev;
      }
    }

    return current;
  }

  set(index, value) {
    const targetNode = this.get(index);
    targetNode.value = value;
  }

  insert(index, value) {
    if (index < 0 || index > this.length) {
      throw new Error('Invalid index');
    }

    if (index === 0) {
      this.unshift(value);
    } else if (index === this.length) {
      this.push(value);
    } else {
      const newNode = new Node(value);
      const nextNode = this.get(index);
      const prevNode = nextNode.prev;

      newNode.next = nextNode;
      newNode.prev = prevNode;
      prevNode.next = newNode;
      nextNode.prev = newNode;

      this.length++;
    }
  }

  remove(index) {
    if (this.length === 0) {
      throw new Error('List is empty');
    }

    if (index < 0 || index > this.length - 1) {
      throw new Error('Invalid index');
    }

    if (index === 0) {
      return this.shift();
    }
    if (index === this.length - 1) {
      return this.pop();
    }
    const removedNode = this.get(index);
    const prevNode = removedNode.prev;
    const nextNode = removedNode.next;

    prevNode.next = nextNode;
    nextNode.prev = prevNode;

    removedNode.next = null;
    removedNode.prev = null;

    this.length--;

    return removedNode;
  }
}

module.exports = DoublyLinkedList;
