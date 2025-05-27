const fetchData = require("./action");

test("Mock implementation of a basic function", () => {
  const mock = jest.fn((x) => 42 + x);
  expect(mock(2)).toBe(44);
});
