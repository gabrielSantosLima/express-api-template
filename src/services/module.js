function getModuleInfo() {
  return {
    hello: "express user :D",
    now: new Date(),
    createdBy: "Gabriel Lima",
    description: "Express API using Docker",
  };
}

module.exports = {
  getModuleInfo,
};
