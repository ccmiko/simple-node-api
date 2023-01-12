function createRandomDate() {
  const start = new Date(2020, 0, 1);
  const end = new Date();

  return new Date(
    start.getTime() + Math.random() * (end.getTime() - start.getTime())
  );
}

module.exports = {
  createRandomDate,
};
