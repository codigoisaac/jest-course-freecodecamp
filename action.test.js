const fetchData = require("./action");

test("the data is peanut butter", (done) => {
  function callback(data) {
    try {
      expect(data).toBe("peanut butter");
      done();
    } catch {
      done(error);
    }
  }

  fetchData(callback);
});
