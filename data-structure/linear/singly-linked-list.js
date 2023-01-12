class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class SinglyLinkedList {
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
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
    }

    this.length++;
  }

  pop() {
    if (!this.head) {
      throw new Error('List is empty');
    }

    let newTail = this.head;
    let current = this.head;
    while (current.next) {
      newTail = current;
      current = current.next;
    }

    this.tail = newTail;
    this.tail.next = null;

    this.length--;

    if (this.length === 0) {
      this.head = null;
      this.tail = null;
    }

    return current;
  }

  shift() {
    if (!this.head) {
      throw new Error('List is empty');
    }

    const oldHead = this.head;
    this.head = this.head.next;

    this.length--;

    if (this.length === 0) {
      this.tail = null;
    }

    return oldHead;
  }

  unshift(value) {
    const newNode = new Node(value);

    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      newNode.next = this.head;
      this.head = newNode;
    }

    this.length++;
  }

  get(index) {
    if (index < 0 || index >= this.length) {
      throw new Error('Invalid index');
    }

    let current = this.head;
    for (let i = 0; i < index; i++) {
      current = current.next;
    }

    return current;
  }

  set(index, value) {
    if (index < 0 || index > this.length - 1) {
      throw new Error('Invalid index');
    }

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
      const prevNode = this.get(index - 1);

      newNode.next = prevNode.next;
      prevNode.next = newNode;

      this.length++;
    }
  }

  remove(index) {
    if (index < 0 || index > this.length - 1) {
      throw new Error('Invalid index');
    }

    let removedNode;
    if (index === 0) {
      removedNode = this.shift();
    } else if (index === this.length - 1) {
      removedNode = this.pop();
    } else {
      const prevNode = this.get(index - 1);
      removedNode = prevNode.next;
      prevNode.next = removedNode.next;

      this.length--;
    }

    return removedNode.value;
  }

  reverse() {
    if (this.length === 0 || this.length === 1) {
      return;
    }

    let prev = this.head;
    let current = this.head.next;
    let next;
    prev.next = null;
    while (true) {
      next = current.next;
      current.next = prev;

      if (!next) {
        current.next = prev;
        break;
      }

      prev = current;
      current = next;
    }

    [this.head, this.tail] = [this.tail, this.head];
  }
}

module.exports = SinglyLinkedList;
