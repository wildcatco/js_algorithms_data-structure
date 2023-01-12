const Stack = require('../stack');

it('last in first out', () => {
  const stack = new Stack();

  stack.push(1);
  stack.push(2);
  stack.push(3);

  expect(stack.pop().value).toBe(3);
  expect(stack.pop().value).toBe(2);
  expect(stack.pop().value).toBe(1);
});
