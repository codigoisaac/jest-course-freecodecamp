test("ok", () => {
  function myFunc(input) {
    if (typeof input !== "number") {
      throw new Error("Invalid Input");
    }
  }

  expect(() => {
    myFunc("ok");
  }).toThrow();
});
