function fetchData(callback) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("peanut butter");
    }, 1000);
  });
}

module.exports = fetchData;
