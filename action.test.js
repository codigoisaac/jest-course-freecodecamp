const fetchData = require("./action");

test("the data is peanut butter", async () => {
  const data = await fetchData();

  expect(data).toBe("peanut butter");
});
