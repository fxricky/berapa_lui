const sum = (a, b) => a + b;

test('sum up two numbers', () => {
  const result = sum(1, 2);

  expect(result).toEqual(3);
});

test('nothing else', () => {
  expect(null).toBeNull();
});
