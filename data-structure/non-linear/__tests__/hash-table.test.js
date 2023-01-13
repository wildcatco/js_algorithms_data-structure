const HashTable = require('../hash-table');

it('get and set', () => {
  const ht = new HashTable();
  ht.set('name', 'jihoo');
  ht.set('height', 181);
  ht.set('weight', 80);

  expect(ht.get('name')).toBe('jihoo');
  expect(ht.get('height')).toBe(181);
  expect(ht.get('weight')).toBe(80);
});

it('keys', () => {
  const ht = new HashTable();

  ht.set('name', 'jihoo');
  ht.set('height', 181);
  ht.set('weight', 80);

  expect(ht.keys().includes('name')).toBe(true);
  expect(ht.keys().includes('height')).toBe(true);
  expect(ht.keys().includes('weight')).toBe(true);
});

it('values', () => {
  const ht = new HashTable();

  ht.set('name', 'jihoo');
  ht.set('height', 181);
  ht.set('weight', 80);

  expect(ht.values().includes('jihoo')).toBe(true);
  expect(ht.values().includes(181)).toBe(true);
  expect(ht.values().includes(80)).toBe(true);
});
