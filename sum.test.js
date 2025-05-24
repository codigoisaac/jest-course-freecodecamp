const sum = require("./sum");

describe("Sum", () => {
  test("Sould sum two numbers", () => {
    expect(sum(8, 8)).toEqual(16);
  });
});
